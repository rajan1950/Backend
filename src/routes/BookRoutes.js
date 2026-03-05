const router = require('express').Router()
const bookController = require('../controller/BookController')

router.get('/books', bookController.getAllBooks)
router.get('/books/:id', bookController.getBookById)
router.post('/books', bookController.createBook)
router.delete('/books/:id', bookController.deleteBook)

module.exports = router
