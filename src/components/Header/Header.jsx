import classes from './Header.module.css'
import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;
