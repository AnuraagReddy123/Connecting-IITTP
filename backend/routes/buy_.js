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

router.route("/").post((request,response) => {
    // response.status(200).json(request.body);
    let sellItem = new BuyModel(request.body);
    // response.status(200).json(sellItem);
    sellItem.save()
    .then((sellItem) => {
        response.status(200).json({'sellItem': 'sellItem added successfully'});
    })
    .catch((error) => {
        response.status(400).send(error);
    });
});

// router.post('/', async (req, res) => {
//     const sellItem = new BuyModel({
//         title: req.body.title,
//         category: req.body.category,
//         description: req.body.description,
//         price: req.body.price,
//         address: req.body.address,
//         mobileNumber: req.body.mobileNumber
//     })
//     try{
//         const a1 = await sellItem.save();
//         res.json(a1);
//     }
//     catch(err){
//         err => res.status(400).json('Error: ' + err);
//     }
// });

module.exports = router;