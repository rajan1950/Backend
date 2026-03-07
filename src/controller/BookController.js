const bookSchema = require('../models/BookModel')

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await bookSchema.find()
        res.json({
            message: 'all books',
            data: allBooks
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getBookById = async (req, res) => {
    try {
        const foundBook = await bookSchema.findById(req.params.id)
        if (foundBook) {
            res.json({
                message: 'book found',
                data: foundBook
            })
        } else {
            res.status(404).json({
                message: 'book not found'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createBook = async (req, res) => {
    try {
        const savedBook = await bookSchema.create(req.body)
        res.status(201).json({
            message: 'book saved',
            data: savedBook
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteBook = async (req, res) => {
    try {
        const deletedBook = await bookSchema.findByIdAndDelete(req.params.id)
        if (deletedBook) {
            res.status(200).json({
                message: 'book deleted',
                data: deletedBook
            })
        } else {
            res.status(404).json({
                message: 'book not found to delete'
            })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook
}
