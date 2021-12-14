const router = require("express").Router();
let ShortUrl = require("../models/shortUrl.model");

router.route('/').get((req, res) => {
    ShortUrl.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
    const url = req.body.url;
    console.log(url);
    const newUrl = new ShortUrl({ full: url });

    newUrl.save()
        .then(() => res.json(newUrl))
        .catch(err => res.status(400).json(err));
});

module.exports = router;