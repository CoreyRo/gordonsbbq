// ******************************************************************************
//Server.js - This file is the starting poit for the node/express server.
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const env = require('dotenv').load()
const routes = require('./routes')
const db = require('./models')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001

//Setup mogoose promises
mongoose.Promise = global.Promise
//Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI || 'mongod://127.0.0.1/gordons-bbq-site',{
        useMongoClient: true
    }
)


// ******************************************************************************
// *** Express app setup
// ==============================================================================
app.use(cors()) // must be before BodyParser
// app.use('/public', express.static('public')) //static directory
app.use(morgan('dev')) //morgan logger
app.use(bodyParser.urlencoded({
    extended:false
    }
))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// ******************************************************************************
// *** Routes
// ==============================================================================
// app.use(routes)

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



