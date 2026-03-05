const bookSchema = require('../models/BookModel')

const getAllBooks = async (req, res) => {
    const allBooks = await bookSchema.find()
    res.json({
        message: 'all books',
        data: allBooks
    })
}

const getBookById = async (req, res) => {
    const foundBook = await bookSchema.findById(req.params.id)
    if (foundBook) {
        res.json({
            message: 'book found',
            data: foundBook
        })
    } else {
        res.json({
            message: 'book not found'
        })
    }
}

const createBook = async (req, res) => {
    const savedBook = await bookSchema.create(req.body)
    res.status(201).json({
        message: 'book saved',
        data: savedBook
    })
}

const deleteBook = async (req, res) => {
    const deletedBook = await bookSchema.findByIdAndDelete(req.params.id)
    if (deletedBook) {
        res.status(200).json({
            message: 'book deleted',
            data: deletedBook
        })
    } else {
        res.status(200).json({
            message: 'book not found to delete'
        })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}
