import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPost.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

export default function BlogPost() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = () => {
      axios
        .get(`${url}/blogs`)
        .then((res) => {
          setblogs(res.data);
          console.log(blogs);
        })
        .catch((err) => console.log(err));
    };
    fetchBlogs(); // fetch the blogs from the database
  },[]);

  return (
    <div className={classes.posts}>
      {blogs.map((blog) => {
        return (
          <Link
            to={`/singleBlog/${blog._id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <BlogCard blog={blog} />
          </Link>
        );
      })}
    </div>
  );
}
