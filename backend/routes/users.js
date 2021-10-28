const router = require('express').Router();
const User = require('../models/user.model');
router.route("/").get((request,response) => {
    User.find((error,users) => {
        if(error) {
            console.log(error);
        }
        else{
            response.json(users);
        }
    });
});
// add the user to the database
router.route("/saveUser").post((request,response) => {
    const user = new User(request.body);
    user.save()
    .then((_user) => {
        response.status(200).json({'user': 'user added successfully'});
    })
    .catch((error) => {
        response.status(400).send('adding new user failed');
    })
});

module.exports = router;