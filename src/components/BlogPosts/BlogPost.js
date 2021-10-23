import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPost.module.css';
import axios from "axios";
import {useState, useEffect} from "react";  

export default function BlogPost() {

  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      axios.get("http://localhost:4000/blogs")
      .then((res) => {
        setblogs(res.data);
        console.log(blogs);
      })
      .catch((err) => console.log(err));
    };
    fetchBlogs();// fetch the blogs from the database
  }, [])

  return (
    <div className={classes.posts}>
      {blogs.map((blog)=> {
        return <BlogCard id={blog._id} title={blog.title} text={blog.text}/>
      })}
    </div>
  );
}
