const express = require("express");
const User = require('../models/User');
const Trip = require("../models/Trip");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const trip = req.body;
        await Trip.find(trip);
        res.json(data)
    } catch (err) {
        res.json(err);
    }
});


module.exports = router;
