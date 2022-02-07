const bookModel = require('../model/book')

const getAllBooks = async (req, res) => {
    res.send(await bookModel.find());
}

const createBook = async (req, res) => {
    const book = new songModel(req.body)
    try {
        res.status(201).json(await book.save())
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = { getAllBooks, createBook }