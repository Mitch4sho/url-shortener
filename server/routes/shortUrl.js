const router = require("express").Router();
let ShortUrl = require("../models/shortUrl.model");

router.route('/').get((req, res) => {
    ShortUrl.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
    const fullUrl = req.body.full;
    const shortUrl = req.body.short;
    console.log(fullUrl, shortUrl);
    const newUrl = new ShortUrl({ full: fullUrl, short: shortUrl });

    newUrl.save()
        .then(() => res.json(newUrl))
        .catch(err => res.status(400).json(err));
});

module.exports = router;