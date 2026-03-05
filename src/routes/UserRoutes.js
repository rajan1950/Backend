const router = require('express').Router();
const usercontroller = require('../controller/UserController');
router.get('/users', usercontroller.getAllUser)

module.exports = router;