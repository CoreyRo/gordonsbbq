const router = require("express").Router();
const blogRoutes = require("./blog");

//route looks like /api/blog/
router.use("/blog", blogRoutes);



module.exports = router