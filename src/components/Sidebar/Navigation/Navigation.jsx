import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={'/profile'}>Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={'/dialogs'}>Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={'/news'}>News</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={'/music'}>Music</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={'/settings'}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
