const express = require("express");
const Trip = require("../models/Trip");

const router = express.Router();

router.get("/", (req, res, next) => {
    Trip.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        })
});


module.exports = router;
