require("dotenv").config();
const express = require("express");
const path = require("path");
const endpoints = require("./routes/endpoints");
const app = express();
const User = require('./models/User');
const Trip = require('./models/Trip');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

app.use("/api", endpoints);
passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(dbUser => {
        done(null, dbUser);
      })
      .catch(error => {
        done(error);
      });
  });
  
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username })
        .then(found => {
          if (found === null) {
            done(null, false, { message: 'Wrong Credentials' });
          } else if (!bcrypt.compareSync(password, found.password)) {
            done(null, false, { message: 'Wrong Credentials' });
          } else {
            done(null, found);
          }
        })
        .catch(error => {
          done(error, false);
        });
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  
// If no routes match, send them the React HTML.
app.use(express.static(path.join(__dirname, "./frontend/build")));

module.exports = app;
