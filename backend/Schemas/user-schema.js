// Create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        validate: [isEmail,'Please enter a valid email'],
    }
});

module.exports = userSchema;