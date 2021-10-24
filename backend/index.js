// implementing Node.js / Express server
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const mongoose = require("mongoose");
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Connection with MongoDB was successful");
});
app.listen(PORT,() => {
    console.log("Server is running on Port: " + PORT);
});

const blogConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/blogs");
const blogRouter = express.Router();
const Blog = blogConnection.model('Blog',require("./Schemas/blog-schema"));
blogRouter.route("/").get((request,response) => {
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
const userRouter = express.Router();
const userConnection = mongoose.createConnection("mongodb://127.0.0.1:27017/users")
const User = userConnection.model('User',require("./Schemas/user-schema"));
userRouter.route("/").get((request,response) => {
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
userRouter.route("/saveUser").post((request,response) => {
    const user = new User(request.body);
    user.save()
    .then((_user) => {
        response.status(200).json({'user': 'user added successfully'});
    })
    .catch((error) => {
        response.status(400).send('adding new user failed');
    })
});
app.use("/users",userRouter);