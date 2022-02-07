const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    price: String,
    genre: String
})

const bookModel = mongoose.model('Books', bookSchema)

module.exports = bookModel