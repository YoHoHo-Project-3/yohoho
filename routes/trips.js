const express = require("express");
const Trip = require("../models/Trip");
const { v4: uuidv4 } = require("uuid");
// const User = require('../models/User');

const router = express.Router();

router.post("/", (req, res, next) => {
  const trip = req.body;
  //   trip.user_id = req.user._id;

  //   trip.slots_booked = 0
  Trip.create(trip)
    .then((trip) => {
      res.status(201).json(trip);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log("error======>", err);
    });
});

router.get("/", (req, res, next) => {
  Trip.find().then((data) => {
      res.json(data)
  });
});

module.exports = router;
