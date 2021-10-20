import classes from './Header.module.css'

export default function Header() {
  return (
    <div className={classes.header}>
      <div class={classes.headerTitles}>
        <span className={classes.headerTitleBig}>Ideas</span>
      </div>
      <img
        className={classes.headerImg}
        src='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/19/793294-esg-environment-social-governance-istock-022019.jpg'
        alt=''
      />

    </div>
  );
}
