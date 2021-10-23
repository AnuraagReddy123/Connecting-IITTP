import { Link } from 'react-router-dom';
import classes from './BlogCard.module.css';

function BlogCard({id,text,title}) {

  return (
    <div>
      <div className={classes.post}>
        <img
          className={classes.postImg}
          src='https://www.thoughtco.com/thmb/cL31vap_f0-OE5KFfZwt8JWcYXs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lightbulblit-57a5bf6b5f9b58974aee831e.jpg'
          alt=''
        />
        <div class={classes.postInfo}>
          <span class={classes.postTitle}>{title}</span>
        </div>
        <p className={classes.postDesc}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
