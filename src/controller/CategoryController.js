const categorySchema = require('../models/CategoryModel')

const getAllCategories = async (req, res) => {
    const allCategories = await categorySchema.find()
    res.json({
        message: 'all categories',
        data: allCategories
    })
}

const getCategoryById = async (req, res) => {
    const foundCategory = await categorySchema.findById(req.params.id)
    if (foundCategory) {
        res.json({
            message: 'category found',
            data: foundCategory
        })
    } else {
        res.json({
            message: 'category not found'
        })
    }
}

const createCategory = async (req, res) => {
    const savedCategory = await categorySchema.create(req.body)
    res.status(201).json({
        message: 'category saved',
        data: savedCategory
    })
}

const deleteCategory = async (req, res) => {
    const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id)
    if (deletedCategory) {
        res.status(200).json({
            message: 'category deleted',
            data: deletedCategory
        })
    } else {
        res.status(200).json({
            message: 'category not found to delete'
        })
    }
}

// PUT /categories/:id/color        => add a color   (req.body.color)
const addColor = async (req, res) => {
    const updatedCategory = await categorySchema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    )
    if (updatedCategory) {
        res.status(200).json({ message: 'color added', data: updatedCategory })
    } else {
        res.status(404).json({ message: 'category not found' })
    }
}

// PUT /categories/:id/color/remove  => remove a color (req.body.color)
const removeColor = async (req, res) => {
    const updatedCategory = await categorySchema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    )
    if (updatedCategory) {
        res.status(200).json({ message: 'color removed', data: updatedCategory })
    } else {
        res.status(404).json({ message: 'category not found' })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory,
    addColor,
    removeColor
}
