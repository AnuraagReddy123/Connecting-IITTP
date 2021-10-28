// Create a schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // username: String,
    title: String,
    text: String,
    picture: String,
    username: String,
    createDate: Date,
});

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog;