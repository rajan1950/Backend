const citySchema = require('../models/CityModel')

const getAllCities = async (req, res) => {
    const allCities = await citySchema.find()
    res.json({
        message: 'all cities',
        data: allCities
    })
}

const getCityById = async (req, res) => {
    const foundCity = await citySchema.findById(req.params.id)
    if (foundCity) {
        res.json({
            message: 'city found',
            data: foundCity
        })
    } else {
        res.json({
            message: 'city not found'
        })
    }
}

const createCity = async (req, res) => {
    const savedCity = await citySchema.create(req.body)
    res.status(201).json({
        message: 'city saved',
        data: savedCity
    })
}

const deleteCity = async (req, res) => {
    const deletedCity = await citySchema.findByIdAndDelete(req.params.id)
    if (deletedCity) {
        res.status(200).json({
            message: 'city deleted',
            data: deletedCity
        })
    } else {
        res.status(200).json({
            message: 'city not found to delete'
        })
    }
}

// PUT /cities/:id/color        => add a color   (req.body.color)
const addColor = async (req, res) => {
    const updatedCity = await citySchema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    )
    if (updatedCity) {
        res.status(200).json({ message: 'color added', data: updatedCity })
    } else {
        res.status(404).json({ message: 'city not found' })
    }
}

// PUT /cities/:id/color/remove  => remove a color (req.body.color)
const removeColor = async (req, res) => {
    const updatedCity = await citySchema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    )
    if (updatedCity) {
        res.status(200).json({ message: 'color removed', data: updatedCity })
    } else {
        res.status(404).json({ message: 'city not found' })
    }
}

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCity,
    addColor,
    removeColor
}
