const router = require('express').Router();
const mongoose = require("mongoose");
const TravellingCategory = mongoose.model('travellingoodCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    TravellingCategory.find((error,categories) => {
        if(error) {
            console.log(error);
        }
        else{
            res.json(categories);
        }
    });
});

// add a category to the database
router.post('/saveCategory',(req,res) => {
    const category = new TravellingCategory(req.body);
    category.save()
    .then((_user) => {
        res.status(200).json({'category': 'category added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new category failed');
    })
});

// fetching a food category through a unique id
router.route("/:id").get((request,response) => {
    let id = request.params.id;
    TravellingCategory.findById(id,(error,travellingCategory) => {
        console.log(travellingCategory)
        response.json(travellingCategory);
    });
});

module.exports = router;