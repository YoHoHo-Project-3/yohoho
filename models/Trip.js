const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  title: String,
  description: String,
  user: {
    required: [true, "User is required."],
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ratings: [
    {
      user: String,
      rating: String,
    },
  ],

  location: {
    start: String,
    end: String,
  },
  date: {
    start: Date,
  },
  boat: {
    type: [
      {
        motor: {
          spots: Number,
          available: Boolean,         
        },
      },
      {
        sails: {
          spots: Number,
          available: Boolean,
        },
      },
      {
        yacht: {
          spots: Number,
          available: Boolean,
        },
      },
    ],
  },

  imgName: String,
  imgPath: String,
  imgPublicId: String,
});
const Trip = mongoose.model("Trip", tripSchema);
module.exports = Trip;
