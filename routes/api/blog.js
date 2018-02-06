// ******************************************************************************
// apiRoutes.js - This file holds the api routes

// ******************************************************************************
// *** Dependencies
// ==============================================================================
const router = require("express").Router()
const blog = require("../../controller/blogController.js")

// api routes
    router
        .route('/create')
        .post(blog.create)

    router
        .route('/read')
        .get(blog.findAll)

    router
        .route('/update:?')
        .post(blog.update)

    router
        .route('/remove:?')
        .post(blog.destroy)

module.exports = router
