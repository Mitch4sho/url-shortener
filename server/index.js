const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ShortUrl = require('./models/shortUrl.model');
const shortUrlRouter = require('./routes/shortUrl');

require('dotenv').config();

const app = express();
const CONNECTION_URI = process.env.URI;
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/shortUrl', shortUrlRouter)

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoDB database connection established'))
    .catch((error) => console.log(error.message));


app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));