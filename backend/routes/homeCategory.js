const router = require('express').Router();
const mongoose = require("mongoose");
const HomeCategory = mongoose.model('homeCategory',require('../schemas/category.schemas'));

// fetch all the categories
router.get('/',(req,res) => {
    HomeCategory.find((error,categories) => {
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
    const category = new HomeCategory(req.body);
    category.save()
    .then((_user) => {
        res.status(200).json({'category': 'category added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new category failed');
    })
});

// fetching a home category through a unique id
router.route("/:id").get((request,response) => {
    let id = request.params.id;
    HomeCategory.findById(id,(error,homeCategory) => {
        console.log(homeCategory)
        response.json(homeCategory);
    });
});

module.exports = router;