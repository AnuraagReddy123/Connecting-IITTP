// Create a schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  // username: String,
  title: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
  },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
