const mongoose = require("mongoose");

const playlistSchema = mongoose.Schema({
    name: String,
    songs: { type: [{ type: mongoose.Schema.Types.ObjectId }], default: [] },
    userId: { type: mongoose.Schema.Types.ObjectId }
})

const playlistModel = mongoose.model('Playlist', playlistSchema)

module.exports = playlistModel