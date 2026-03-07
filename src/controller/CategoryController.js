const categorySchema = require('../models/CategoryModel')

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await categorySchema.find()
        res.json({
            message: 'all categories',
            data: allCategories
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCategoryById = async (req, res) => {
    try {
        const foundCategory = await categorySchema.findById(req.params.id)
        if (foundCategory) {
            res.json({
                message: 'category found',
                data: foundCategory
            })
        } else {
            res.status(404).json({
                message: 'category not found'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createCategory = async (req, res) => {
    try {
        const savedCategory = await categorySchema.create(req.body)
        res.status(201).json({
            message: 'category saved',
            data: savedCategory
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await categorySchema.findByIdAndDelete(req.params.id)
        if (deletedCategory) {
            res.status(200).json({
                message: 'category deleted',
                data: deletedCategory
            })
        } else {
            res.status(404).json({
                message: 'category not found to delete'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}
