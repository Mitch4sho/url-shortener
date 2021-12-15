const router = require("express").Router();
let ShortUrl = require("../models/shortUrl.model");

router.route('/').get((req, res) => {
    ShortUrl.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route("/add").post(async (req, res) => {
    const fullUrl = req.body.full;
    const shortUrl = req.body.short;

    const url = await ShortUrl.findOne({ short: fullUrl });
    if (url !== null) return res.json(url);

    const newUrl = new ShortUrl({ full: fullUrl, short: shortUrl });

    newUrl.save()
        .then(() => res.json(newUrl))
        .catch(err => res.status(400).json(err));
});

module.exports = router;