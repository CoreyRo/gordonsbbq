// ******************************************************************************
//This file is the starting poit for the mongoose models
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Exporting the model(s)
module.exports = {
    Gordonsbbq: require('./Gordonsbbq')
}


