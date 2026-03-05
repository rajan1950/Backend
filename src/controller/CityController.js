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

module.exports = {
    getAllCities,
    getCityById,
    createCity,
    deleteCity
}
