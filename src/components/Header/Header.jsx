import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/OneWeb_Logo.png" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
