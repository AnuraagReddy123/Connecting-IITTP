const router = require('express').Router();
const BuyModel = require('../models/buy.model');

router.route("/").get((request,response) => {
    BuyModel.find((error,buyItems) => {
        if(error){
            console.log(error);
        }
        else{
            response.json(buyItems);
        }
    });
});

module.exports = router;