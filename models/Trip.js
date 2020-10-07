const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
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
    ref: "User",
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
    // required: [true, "Please insert the total available slots."],
    required: false,
    type: Number,
  },
  slots_booked: {
    required: false,
    type: Number,
  },
  image: {
    required: [false, "Please upload an image."],
    type: String,
  },
  passengers: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
});
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
