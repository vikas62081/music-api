const express = require('express');
const mongoose = require('mongoose');
const router = require('./router')
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 3000;
const CONNECTION_URL = 'mongodb+srv://mangodb:dbpassword@cluster0.efqbs.mongodb.net/music?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server Running on Port: http://localhost:${PORT}`)
    }))
    .catch((error) => console.log(`${error} did not connect`));

app.use('/api', router)
// app.use('/',)