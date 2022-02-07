const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    genre: String
})

const bookModel = mongoose.model('Books', songSchema)

module.exports = bookModel