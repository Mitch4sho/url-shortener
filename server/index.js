const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl.model');
const shortUrlRouter = require('./routes/shortUrl');

require('dotenv').config();

const app = express();
const CONNECTION_URI = process.env.URI;
const PORT = process.env.PORT || 9000;


mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoDB database connection established'))
    .catch((error) => console.log(error.message));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/shortUrl', shortUrlRouter)

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));