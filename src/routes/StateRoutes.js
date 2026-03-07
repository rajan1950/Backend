const router = require('express').Router()
const stateController = require('../controller/StateController')

router.get('/states', stateController.getAllStates)
router.get('/states/:id', stateController.getStateById)
router.post('/states', stateController.createState)
router.delete('/states/:id', stateController.deleteState)

// PUT /states/:id/color        => add a color   (req.body.color)
// PUT /states/:id/color/remove => remove a color (req.body.color)
router.put('/states/:id/color', stateController.addColor)
router.put('/states/:id/color/remove', stateController.removeColor)


module.exports = router
