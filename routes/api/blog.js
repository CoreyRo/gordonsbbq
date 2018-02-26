// ******************************************************************************
// apiRoutes.js - This file holds the api routes

// ******************************************************************************
// *** Dependencies
// ==============================================================================
const router = require("express").Router()
const blog = require("../../controller/blogController.js")

// api routes
    router
        .route('/get/:num/:limit')
        .get(blog.findPages)

    router
        .route('/getall')
        .get(blog.findAll)

    router
        .route('/getone/:id')
        .get(blog.getOne)

        

module.exports = router


