const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
let date = new Date();

const blogSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  img: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

blogSchema.plugin(mongooseAggregatePaginate);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
