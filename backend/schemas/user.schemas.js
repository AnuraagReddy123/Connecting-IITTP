// Create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: String,
    email: {
        type: String,
        required: true,
    },
    // image: {
    //     type: String
    // },
    password: String,
});

module.exports = userSchema;