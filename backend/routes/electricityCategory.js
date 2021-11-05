const router = require('express').Router();
const mongoose = require("mongoose");
const ElectricityCategory = mongoose.model('electricityCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    ElectricityCategory.find((error,categories) => {
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
    const category = new ElectricityCategory(req.body);
    category.save()
    .then((_user) => {
        res.status(200).json({'category': 'category added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new category failed');
    })
});

// fetching a electricity category through a unique id
router.route("/:id").get((request,response) => {
    let id = request.params.id;
    ElectricityCategory.findById(id,(error,electricityCategory) => {
        console.log(electricityCategory)
        response.json(electricityCategory);
    });
});

module.exports = router;