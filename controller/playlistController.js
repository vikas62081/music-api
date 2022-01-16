const playlistModel = require('../model/playlist')
const mongoose = require("mongoose");
const getAllPlaylists = async (req, res) => {
    res.send(await playlistModel.find());
}

const getPlaylistByUserId = async (req, res) => {
    const { id } = req.params
    try {
        const a = await playlistModel.aggregate([
            { "$match": { $expr: { $eq: ['$userId', mongoose.Types.ObjectId(id)] }, } }, {
                $lookup: {
                    from: 'songs',
                    localField: 'songs',
                    foreignField: '_id',
                    as: 'playlist'
                },
            },
        ]);
        return res.send(a)
    } catch {
        res.status(404).json({ message: `Invalid User id: ${id}` })
    }



}
const createPlaylist = async (req, res) => {
    const playlist = new playlistModel(req.body)

    try {
        res.status(201).json(await playlist.save())
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const updatePlaylist = async (req, res) => {
    try {
        const playlist = await playlistModel.findByIdAndUpdate(req.params.id,
            { $addToSet: { songs: req.body.songs } })
        res.json({ message: "playlist updated successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
module.exports = { getAllPlaylists, createPlaylist, getPlaylistByUserId, updatePlaylist }