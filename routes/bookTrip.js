const express = require("express");
const Trip = require("../models/Trip");
const User = require('../models/User');

const router = express.Router();

router.get("/", async (req, res, next) => {
    const trip = req.body;
    try {
        await Trip.find(trip);
        res.json(trip);
    } catch (err) {
        res.json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            res.status(404).json(trip);
        } else {
            res.status(200).json(trip);
        }
    }
    catch (err) {
        res.json(err);
    };
});

router.delete("/:id", async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Trip deleted" });
    } catch (err) {
        res.json(err);
    };
});

router.post("/unbook/:tripId", async (req, res, next) => {
    console.log(req.user._id, req.params.tripId)
    try {
        let updateUser = await User.findByIdAndUpdate(req.user._id, { $pull: { trips: req.params.tripId } })
        let updateTrip = await Trip.findByIdAndUpdate(req.params.tripId, { $pull: { passengers: req.user._id }, $inc: { slotsAvailable: +1 }, $inc: { slots_booked: -1 } })

        res.status(201).json(updateTrip);
    } catch (err) {
        res.status(400).json(err);
        console.log("error======>", err);
    };
});

router.post("/:tripId", async (req, res, next) => {
    console.log(req.user._id, req.params.tripId)
    try {
        let updateUser = await User.findByIdAndUpdate(req.user._id, { $push: { trips: req.params.tripId } })
        let updateTrip = await Trip.findByIdAndUpdate(req.params.tripId, { $push: { passengers: req.user._id }, $inc: { slotsAvailable: -1 }, $inc: { slots_booked: +1 } })

        res.status(201).json(updateTrip);
    } catch (err) {
        res.status(400).json(err);
        console.log("error======>", err);
    };
});

module.exports = router;
