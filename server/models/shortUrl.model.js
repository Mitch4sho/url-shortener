const mongoose = require('mongoose');


const urlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: createShortUrl()
    }
});

// to create the short url 
function createShortUrl() {
    let res = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let char = 0; char <= 5; char++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return res;
}

module.exports = mongoose.model("ShortUrl", urlSchema);