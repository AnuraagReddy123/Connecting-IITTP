import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './SingleBlog.module.css';

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

export default function SingleBlog({ match }) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = () => {
      axios
        .get(`${url}/blogs/${match.params.id}`)
        .then((res) => {
          setBlog(res.data);
          console.log(blog);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchBlog();
  }, []);

  return (
    <div className={classes.single}>
      <div className={classes.singlePostWrapper}>
        <img
          src='https://www.thespruce.com/thmb/LUtS0lKGZT2krNHDxqkPpHu4Jao=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg'
          alt=''
          class={classes.singlePostImage}
        />
        <h1 className={classes.singlePostTitle}>{blog.title}</h1>
        <div className={classes.singlePostInfo}>
          <p className={classes.singlePostAuthor}>
            Author: <b>{blog.username}</b>
          </p>
          <p className={classes.singlePostDate}>
            Creted at: {blog.createdDate}
          </p>
        </div>
        <p className={classes.singlePostText}>{blog.text}</p>
      </div>
    </div>
  );
}
