const router = require('express').Router();
const mongoose = require("mongoose");
const FoodCategory = mongoose.model('foodCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    FoodCategory.find((error,categories) => {
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
    const category = new FoodCategory(req.body);
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
    FoodCategory.findById(id,(error,foodCategory) => {
        console.log(foodCategory)
        response.json(foodCategory);
    });
});

module.exports = router;