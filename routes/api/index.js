const router = require("express").Router();
const blogRoutes = require("./blog");

//route looks like /api/blog/
// TO DO: fix the all the axios posts to 
// more logically named routes
router.use("/blog", blogRoutes);

module.exports = router