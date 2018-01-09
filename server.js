// ******************************************************************************
//Server.js - This file is the starting poit for the node/express server.
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const env = require('dotenv').load()
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001


// ******************************************************************************
// *** Express app setup
// ==============================================================================
app.use(cors()) // must be before BodyParser
app.use('/public', express.static('public')) // Static directory
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// ******************************************************************************
// *** Routes
// ==============================================================================
const routes = require("./routes")
app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });


// ******************************************************************************
// *** Server listen on PORT
// ==============================================================================
app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});




