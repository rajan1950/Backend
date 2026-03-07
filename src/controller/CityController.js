const citySchema = require('../models/CityModel')

const getAllCities = async (req, res) => {
    try {
        const allCities = await citySchema.find()
        res.json({
            message: 'all cities',
            data: allCities
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getCityById = async (req, res) => {
    try {
        const foundCity = await citySchema.findById(req.params.id)
        if (foundCity) {
            res.json({
                message: 'city found',
                data: foundCity
            })
        } else {
            res.status(404).json({
                message: 'city not found'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createCity = async (req, res) => {
    try {
        const savedCity = await citySchema.create(req.body)
        res.status(201).json({
            message: 'city saved',
            data: savedCity
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteCity = async (req, res) => {
    try {
        const deletedCity = await citySchema.findByIdAndDelete(req.params.id)
        if (deletedCity) {
            res.status(200).json({
                message: 'city deleted',
                data: deletedCity
            })
        } else {
            res.status(404).json({
                message: 'city not found to delete'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCity
}
