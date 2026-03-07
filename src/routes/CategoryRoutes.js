const router = require('express').Router()
const categoryController = require('../controller/CategoryController')

router.get('/categories', categoryController.getAllCategories)
router.get('/categories/:id', categoryController.getCategoryById)
router.post('/categories', categoryController.createCategory)
router.delete('/categories/:id', categoryController.deleteCategory)

// PUT /categories/:id/color        => add a color   (req.body.color)
// PUT /categories/:id/color/remove => remove a color (req.body.color)
router.put('/categories/:id/color', categoryController.addColor)
router.put('/categories/:id/color/remove', categoryController.removeColor)

module.exports = router
