const router = require('express').Router();
const mongoose = require("mongoose");
const ShoppingCategory = mongoose.model('shoppingCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    ShoppingCategory.find((error,categories) => {
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
    const category = new ShoppingCategory(req.body);
    category.save()
    .then((_user) => {
        res.status(200).json({'category': 'category added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new category failed');
    })
});

// fetching a shopping category through a unique id
router.route("/:id").get((request,response) => {
    let id = request.params.id;
    ShoppingCategory.findById(id,(error,shoppingCategory) => {
        console.log(shoppingCategory)
        response.json(shoppingCategory);
    });
});

module.exports = router;