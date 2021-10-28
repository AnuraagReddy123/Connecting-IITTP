const router = require('express').Router();
const Blog = require('../models/blog.model');
router.route("/").get((request,response) => {
    Blog.find((error,blogs) => {
        if(error){
            console.log(error);
        }
        else{
            response.json(blogs);
        }
    });
});
// fetching a blog through a unique id
router.route("/:id").get((request,response) => {
    let id = request.params.id;
    Blog.findById(id,(error,blog) => {
        response.json(blog);
    });
});
// add the blog to the database
router.route("/saveBlog").post((request,response) => {
    console.log(request.body);
    let blog = new Blog(request.body);
    blog.save()
    .then((blog) => {
        response.status(200).json({'blog': 'blog added successfully'});
    })
    .catch((error) => {
        response.status(400).send('adding new blog failed');
    });
});

module.exports = router;