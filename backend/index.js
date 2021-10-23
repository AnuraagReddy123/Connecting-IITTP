// implementing Node.js / Express server
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const blogRouter = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/blogs",{
    useNewURLParser: true
});

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Connection with MongoDB was successful");
});

let Blog = require("./Models/blog-model");

blogRouter.route("/").get((req,res) => {
    Blog.find((error,blogs) => {
        if(error){
            console.log(error);
        }
        else{
            res.json(blogs);
        }
    });
});

// fetching a blog through a unique id
blogRouter.route("/:id").get((request,response) => {
    let id = request.params.id;
    Blog.findById(id,(error,blog) => {
        response.json(blog);
    });
});

// add the blog to the database
blogRouter.route("/saveBlog").post((request,response) => {
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

app.use("/blogs",blogRouter);
app.listen(PORT,() => {
    console.log("Server is running on Port: " + PORT);
});