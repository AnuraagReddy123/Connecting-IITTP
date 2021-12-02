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

// fetching a add through a unique id
router.route('/:id').get((request, response) => {
    let id = request.params.id;
    BuyModel.findById(id, (error, buyItem) => {
      console.log(buyItem);
      response.json(buyItem);
    });
  });

router.route("/").post((request,response) => {
    
    let sellItem = new BuyModel(request.body);
    sellItem.save()
    .then((sellItem) => {
        response.status(200).json({'sellItem': 'sellItem added successfully'});
    })
    .catch((error) => {
        response.status(400).send(error);
    });
});

router.delete("/:id", function(req, res) {
    var id = req.params.id;
    BuyModel.findOneAndRemove({_id: id}, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).send();
        }

        return res.status(200).send();
    })
});

module.exports = router;