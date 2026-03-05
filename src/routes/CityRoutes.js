const router = require('express').Router()
const cityController = require('../controller/CityController')

router.get('/cities', cityController.getAllCities)
router.get('/cities/:id', cityController.getCityById)
router.post('/cities', cityController.createCity)
router.delete('/cities/:id', cityController.deleteCity)

module.exports = router
