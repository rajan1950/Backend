const router = require('express').Router();
const usercontroller = require('../controller/UserController');
router.get('/users', usercontroller.getAllUser)

// PUT /users/:id/color        => add a color   (req.body.color)
// PUT /users/:id/color/remove => remove a color (req.body.color)
router.put('/users/:id/color', usercontroller.addColor)
router.put('/users/:id/color/remove', usercontroller.removeColor)

module.exports = router;