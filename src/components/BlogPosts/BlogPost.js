import BlogCard from '../BlogCard/BlogCard';
import classes from './BlogPost.module.css';

export default function BlogPost() {
  return (
    <div className={classes.posts}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
