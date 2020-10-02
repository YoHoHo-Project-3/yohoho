const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  trip_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: [true, "Title is required."],
  },
  description: {
    type: String,
    required: [true, "Description is required."],
  },
  user_id: {
    required: true,
    type: Schema.Types.ObjectId,
  },
  location_start: {
    required: [true, "The start location is required."],
    type: String,
  },
  location_end: {
    required: [true, "The end location is required."],
    type: String,
  },
  date: {
    required: [true, "Please enter a date."],
    type: Date,
  },
  boat_name: {
    required: [true, "Please select a boat type."],
    type: String,
  },
  price: {
    required: [true, "Please insert a price."],
    type: Number,
  },
  slots_available: {
    required: [true, "Please insert the total available slots."],
    type: Number,
  },
  slots_booked: {
    required: true,
    type: Number,
  },
  img_url: {
    required: [true, "Please upload an image."],
    type: String,
  }
});
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
