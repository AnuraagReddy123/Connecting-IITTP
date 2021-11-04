// Create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title : {
        type : String,
    },
    tips : {
        type : String,
    },
    impacts : {
        type : String,
    }
});

module.exports = categorySchema;