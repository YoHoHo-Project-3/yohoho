require("dotenv").config();
const express = require("express");
const logger = require('morgan');
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const app = express();
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcrypt');
const endpoints = require("./routes");
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const Trip = require('./models/Trip');


require('./configs/passport.js');


mongoose
  .connect( process.env.MONGO_CONNECT || 'mongodb://localhost/yohoho', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const MongoStore = require('connect-mongo')(session);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
    saveUninitialized: false,
    resave: true,
    store: new MongoStore({
      // when the session cookie has an expiration date
      // connect-mongo will use it, otherwise it will create a new 
      // one and use ttl - time to live - in that case one day
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 * 1000
    })
  })
)

app.use(passport.initialize());
app.use(passport.session());


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

const trips = require('./routes/trips');
app.use('/api/trips', trips);


const search = require('./routes/search');
app.use('/api/search', search);


const profile = require('./routes/profile');
app.use('/api/profile', profile);

const auth = require('./routes/auth');
app.use('/api/auth', auth);

// app.use((req, res) => {res.sendFile(__dirname +'/client/build/index.html));
// })

module.exports = app;