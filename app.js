require("dotenv").config();
const express = require("express");
const path = require("path");
const endpoints = require("./routes/endpoints");
const app = express();

app.use("/api", endpoints);

// If no routes match, send them the React HTML.
app.use(express.static(path.join(__dirname, "./frontend/build")));

module.exports = app;
