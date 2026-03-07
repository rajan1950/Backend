const router = require('express').Router()
const cityController = require('../controller/CityController')

router.get('/cities', cityController.getAllCities)
router.get('/cities/:id', cityController.getCityById)
router.post('/cities', cityController.createCity)
router.delete('/cities/:id', cityController.deleteCity)

// PUT /cities/:id/color        => add a color   (req.body.color)
// PUT /cities/:id/color/remove => remove a color (req.body.color)
router.put('/cities/:id/color', cityController.addColor)
router.put('/cities/:id/color/remove', cityController.removeColor)

module.exports = router
