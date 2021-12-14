const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CONNECTION_URI = process.env.URI;
const PORT = process.env.PORT || 9000;

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log('mongoDB database connection established')
        console.log(`server is running on port: ${PORT}`)
    }))
    .catch((error) => console.log(error.message));
