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
  } catch (err) {
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

router.post("/", async (req, res, next) => {
  try {
    const trip = req.body;
    trip.user_id = req.user._id;

    trip.slots_booked = 0
    await Trip.create(trip);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json(err);
    console.log("error======>", err);
  };
});

module.exports = router;
