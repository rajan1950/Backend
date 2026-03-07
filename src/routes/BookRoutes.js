const router = require('express').Router()
const bookController = require('../controller/BookController')

router.get('/books', bookController.getAllBooks)
router.get('/books/:id', bookController.getBookById)
router.post('/books', bookController.createBook)
router.delete('/books/:id', bookController.deleteBook)

// PUT /books/:id/color        => add a color   (req.body.color)
// PUT /books/:id/color/remove => remove a color (req.body.color)
router.put('/books/:id/color', bookController.addColor)
router.put('/books/:id/color/remove', bookController.removeColor)

module.exports = router
