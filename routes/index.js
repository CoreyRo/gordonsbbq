// ******************************************************************************
//This file is the starting poit for the api routes
//
// ******************************************************************************
// *** Dependencies
// ==============================================================================
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// router.get("/admin", function(req, res) {
//     res.sendFile(path.resolve(__dirname, "./client/public/admin.html"));
// });

// // ******************************************************************************
// // *** Setup api routes
// // ==============================================================================
router.use("/api", apiRoutes); //adds /api to apiRoutes


// // ******************************************************************************
// // *** export app routes
// // ==============================================================================
module.exports = router