// Create a schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    // username: String,
    title: String,
    text: String
});

module.exports = blogSchema;