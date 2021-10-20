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
          <p className={classes.singlePostAuthor}>
            Author: <b>Anuraag</b>
          </p>
          <p className={classes.singlePostDate}>2hr ago</p>
        </div>
        <p className={classes.singlePostText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          laborum ut? Vitae laudantium commodi ab quam ratione veniam soluta
          ullam, culpa asperiores earum omnis, distinctio, saepe accusamus
          aliquam quae exercitationem. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vitae, laborum ut? Vitae laudantium commodi ab quam
          ratione veniam soluta ullam, culpa asperiores earum omnis, distinctio,
          saepe accusamus aliquam quae exercitationem. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Vitae, laborum ut? Vitae laudantium
          commodi ab quam ratione veniam soluta ullam, culpa asperiores earum
          omnis, distinctio, saepe accusamus aliquam quae exercitationem. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Vitae, laborum ut?
          Vitae laudantium commodi ab quam ratione veniam soluta ullam, culpa
          asperiores earum omnis, distinctio, saepe accusamus aliquam quae
          exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Vitae, laborum ut? Vitae laudantium commodi ab quam ratione
          veniam soluta ullam, culpa asperiores earum omnis, distinctio, saepe
          accusamus aliquam quae exercitationem. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Vitae, laborum ut? Vitae laudantium
          commodi ab quam ratione veniam soluta ullam, culpa asperiores earum
          omnis, distinctio, saepe accusamus aliquam quae exercitationem. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Vitae, laborum ut?
          Vitae laudantium commodi ab quam ratione veniam soluta ullam, culpa
          asperiores earum omnis, distinctio, saepe accusamus aliquam quae
          exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Vitae, laborum ut? Vitae laudantium commodi ab quam ratione
          veniam soluta ullam, culpa asperiores earum omnis, distinctio, saepe
          accusamus aliquam quae exercitationem. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Vitae, laborum ut? Vitae laudantium
          commodi ab quam ratione veniam soluta ullam, culpa asperiores earum
          omnis, distinctio, saepe accusamus aliquam quae exercitationem.
        </p>
      </div>
    </div>
  );
}
