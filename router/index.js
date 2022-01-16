const express = require('express');
const getAllUsers = require('../controller/userController')
const { getAllPlaylists, createPlaylist, getPlaylistByUserId, updatePlaylist } = require('../controller/playlistController')
const { getAllSongs, createSong } = require('../controller/songController')
const router = express.Router();

router.get('/user', getAllUsers)

router.post('/playlist', createPlaylist)
router.get('/playlist', getAllPlaylists)
router.get('/playlist/:id', getPlaylistByUserId)
router.patch('/playlist/:id', updatePlaylist)

router.get('/song', getAllSongs)
router.post('/song', createSong)

module.exports = router