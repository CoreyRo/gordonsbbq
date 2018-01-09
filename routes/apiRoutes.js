// ******************************************************************************
// apiRoutes.js - This file holds the api routes

// ******************************************************************************
// *** Dependencies
// ==============================================================================
const router = require("express").Router()
const api = require("../controllers/apiController.js")

// api routes

    router
        .route('/contact')
        .post(api.sendMail)

    // router
    //     .route('/confirm')
    //     .post(api.sendConfirmation)

module.exports = router
