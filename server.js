///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const peopleController = require('./controllers/people-controller')
// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;
console.log(MONGODB_URI)
// import express
const express = require("express");
const app = express();

const mongoose = require('mongoose');

const cors = require("cors")
const morgan = require("morgan")

mongoose.connect(MONGODB_URI);

mongoose.connection
  .on("open", () => console.log("I'M PUSHING MONGO!!!!! 🛹🛹🛹🛹🛹🛹 "))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


  app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
  app.use(cors()); // to prevent cors errors, open access to all origins
  app.use(morgan("dev")); // logging for development
  // all requests for endpoints that begin with '/people'
  app.use('/people', peopleController)
  

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`I'm always listning on PORT ${PORT}, Eamonn`));
