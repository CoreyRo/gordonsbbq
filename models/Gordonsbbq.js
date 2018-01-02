// ******************************************************************************
//gordonsbbq.js - This file is the gordonsbbq mongodb model
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//gordonsbbq model
const gordonsbbqSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    dateAdded: { 
        type: Date,
        default: Date.now
    }
})

//define model
const Gordonsbbq = mongoose.model('Gordonsbbq', gordonsbbqSchema)

//export model
module.exports = Gordonsbbq