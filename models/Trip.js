const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
    trip_id: {
    type: String,
    required: false,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  user: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  locationStart: {
    required: [true, "The start location is required."],
    type: String,
  },
  locationEnd: {
    required: [true, "The end location is required."],
    type: String,
  },
  date: {
    required: [true, "Please enter a date."],
    type: String,
  },
  boatName: {
    required: [true, "Please select a boat type."],
    type: String,
  },
  price: {
    required: [true, "Please insert a price."],
    type: String,
  },
  slotsAvailable: {
    required: [true, "Please insert the total available slots."],
    type: String,
  },
  slots_booked: {
    required: false,
    type: String,
  },
  image: {
    required: [false, "Please upload an image."],
    type: String,
  }
});
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
