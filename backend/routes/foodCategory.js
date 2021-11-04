const router = require('express').Router();
const mongoose = require("mongoose");
const foodCategory = mongoose.model('foodCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    foodCategory.find((error,categories) => {
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
    const category = new foodCategory(req.body);
    category.save()
    .then((_user) => {
        res.status(200).json({'category': 'category added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new category failed');
    })
});

module.exports = router;