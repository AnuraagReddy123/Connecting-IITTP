const router = require('express').Router();
const { body,validationResult } = require('express-validator');
const User = require('../models/user.model');

// fetch all the users
router.get('/',(req,res) => {
    User.find((error,users) => {
        if(error) {
            console.log(error);
        }
        else{
            res.json(users);
        }
    });
});

// add the user to the database
router.post('/saveUser',(req,res) => {
    const user = new User(req.body);
    user.save()
    .then((_user) => {
        res.status(200).json({'user': 'user added successfully'});
    })
    .catch((_error) => {
        res.status(400).send('adding new user failed');
    })
});

// find a user by username
router.get('/findUsername',async (req,res) => {
    const user = await User.findOne({username: req.query.username}).exec();
    res.json(user);
});

// find a user by email
router.get('/findEmail',async (req,res) => {
    const user = await User.findOne({email: req.query.email}).exec();
    res.json(user);
});

// register a user
router.post('/register',body("username").custom(async (value) => {
    const user = await User.find({username: value});
    if(user.length > 0) {
        // user name already exists
        // reject the promise
        return Promise.reject('Username already in use');
    }
}),body("email").custom(async (value) => {
    const user = await User.find({email : value});
    if(user.length > 0) {
        // email already exists
        // reject the promise
        return Promise.reject('Email already in use');
    }
}),async (req,res) => {
    // Validate incoming input
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).send(errors)
    }
    else{
        const user = new User(req.body);
        user.save()
        .then((_user) => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch((error) => {
            res.status(400).send('adding new user failed');
        })
    }
});

module.exports = router;