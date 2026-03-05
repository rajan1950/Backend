const router = require('express').Router()
const categoryController = require('../controller/CategoryController')

router.get('/categories', categoryController.getAllCategories)
router.get('/categories/:id', categoryController.getCategoryById)
router.post('/categories', categoryController.createCategory)
router.delete('/categories/:id', categoryController.deleteCategory)

module.exports = router
