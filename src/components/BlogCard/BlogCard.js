import classes from './BlogCard.module.css';

function BlogCard() {
  return (
    <div>
      <div className={classes.post}>
        <img
          className={classes.postImg}
          src='https://www.thoughtco.com/thmb/cL31vap_f0-OE5KFfZwt8JWcYXs=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lightbulblit-57a5bf6b5f9b58974aee831e.jpg'
          alt=''
        />
        <div class={classes.postInfo}>
          <span class={classes.postTitle}>Lorem ipsum dolor sit, amet</span>
          <hr />
          {/* <span className={classes.postData}></span> */}
        </div>
        <p className={classes.postDesc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          mollitia quibusdam numquam doloribus ullam vero libero est soluta
          voluptas, animi reiciendis quisquam itaque expedita ratione dolor
          ducimus quo, aspernatur suscipit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          mollitia quibusdam numquam doloribus ullam vero libero est soluta
          voluptas, animi reiciendis quisquam itaque expedita ratione dolor
          ducimus quo, aspernatur suscipit.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          mollitia quibusdam numquam doloribus ullam vero libero est soluta
          voluptas, animi reiciendis quisquam itaque expedita ratione dolor
          ducimus quo, aspernatur suscipit.
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
