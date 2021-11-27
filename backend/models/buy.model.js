// Create a schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }, 
    description: {
        type: String,
        required: true,
    }, 
    price: {
        type: String,
        required: true,
    }, 
    address: {
        type: String,
        required: true,
    }, 
    mobileNumber: {
        type: String,
        required: true,
    }
    // image: {

    // },
});

const BuyModel = mongoose.model('BuyModel', buyProductSchema, 'buy');
module.exports = BuyModel;
