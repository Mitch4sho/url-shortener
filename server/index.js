const express = require('express');
const mongoose = require('mongoose');

const app = express();

const CONNECTION_URL = "mongodb+srv://Mitch4sho:Pich1234@cluster0.f79uw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
