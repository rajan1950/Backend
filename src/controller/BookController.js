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

// PUT /books/:id/color        => add a color   (req.body.color)
const addColor = async (req, res) => {
    const updatedBook = await bookSchema.findByIdAndUpdate(
        req.params.id,
        { $push: { colors: req.body.color } },
        { new: true }
    )
    if (updatedBook) {
        res.status(200).json({ message: 'color added', data: updatedBook })
    } else {
        res.status(404).json({ message: 'book not found' })
    }
}

// PUT /books/:id/color/remove  => remove a color (req.body.color)
const removeColor = async (req, res) => {
    const updatedBook = await bookSchema.findByIdAndUpdate(
        req.params.id,
        { $pull: { colors: req.body.color } },
        { new: true }
    )
    if (updatedBook) {
        res.status(200).json({ message: 'color removed', data: updatedBook })
    } else {
        res.status(404).json({ message: 'book not found' })
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    deleteBook,
    addColor,
    removeColor
}
