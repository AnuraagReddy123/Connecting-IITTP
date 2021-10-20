import classes from './SingleBlog.module.css';

export default function SingleBlog() {
  return (
    <div className={classes.single}>
      <div className={classes.singlePostWrapper}>
        <img
          src='https://www.thespruce.com/thmb/LUtS0lKGZT2krNHDxqkPpHu4Jao=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg'
          alt=''
          class={classes.singlePostImage}
        />
        <h1 className={classes.singlePostTitle}>Lorem ipsum dolor sit amet.</h1>
        <div className={classes.singlePostInfo}>
            <span className={classes.singlePostAuthor}>Author:  </span>
        </div>
      </div>
    </div>
  );
}
