const mongoose = require("mongoose");

const songSchema = mongoose.Schema({
    title: String,
    album: String,
    artists: String,
})

const songModel = mongoose.model('Songs', songSchema)

module.exports = songModel