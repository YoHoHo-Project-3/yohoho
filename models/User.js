const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: String,
  email: {
    type: String,
    required: [true, 'Email is required.'],
    // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: 'user',
  },
  trips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
  createdTrips: [
    {
      type: Schema.Types.ObjectId,
      ref: "Trip",
    },
  ],
  
  birthdate: Date,
  gender: String,
  biography: String,
  telephone: Number,
  picture: String,
  experience: String,


});
const User = mongoose.model("User", userSchema);
module.exports = User;