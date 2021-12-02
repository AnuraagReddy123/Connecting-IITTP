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
          src={blog.picture}
          alt=''
          class={classes.singlePostImage}
        />
        <h1 className={classes.singlePostTitle}>{blog.title}</h1>
        <div className={classes.singlePostInfo}>
          <p className={classes.singlePostAuthor}>
            Author: <b>{blog.username}</b>
          </p>
          <p className={classes.singlePostDate}>
            Creted at: {new Date(blog.createdDate).toDateString()}
          </p>
        </div>
        <p className={classes.singlePostText}>{blog.text}</p>
      </div>
    </div>
  );
}
