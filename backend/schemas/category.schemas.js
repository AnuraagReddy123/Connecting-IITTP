// Create a schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    title : {
        type : String,
    },
    text : {
        type: String,
    },
    tips : {
        type : Array,
    },
    impacts : {
        type : Array,
    }
});

module.exports = categorySchema;