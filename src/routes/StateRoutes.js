const router = require('express').Router()
const stateController = require('../controller/StateController')

router.get('/states', stateController.getAllStates)
router.get('/states/:id', stateController.getStateById)
router.post('/states', stateController.createState)
router.delete('/states/:id', stateController.deleteState)

module.exports = router
