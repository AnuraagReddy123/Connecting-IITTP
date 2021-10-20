import classes from './WriteBlog.module.css';

export default function WriteBlog() {
  return (
    <div className={classes.write}>
      <form className={classes.writeForm}>
        <div className={classes.formGroup}>
          <label for='fileInput'>
            <i class='fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className={classes.writeInput}
            autoFocus={true}
          />
        </div>
        <div className={classes.formGroup}>
          <textarea
            placeholder='Add your ideas!'
            className={classes.writeText}
          />
        </div>
        <button className={classes.writeSubmit}>Publish</button>
      </form>
    </div>
  );
}
