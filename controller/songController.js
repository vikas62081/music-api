
const songModel = require('../model/song')
const getAllSongs = async (req, res) => {
    res.send(await songModel.find());
}
const createSong = async (req, res) => {
    const song = new songModel(req.body)

    try {
        res.status(201).json(await song.save())
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = { getAllSongs, createSong }