import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  return (
    <li className={classes.dialog}>
      <NavLink className={(NavData) => NavData.isActive ? classes.active : ''} to={`/dialogs/${props.id}`}>
        <div className={classes.dialog_avatar}>
          <img src={props.image} alt="Dialog avatar" />
        </div>
        <div className={classes.dialog_name}>{props.name}</div>
      </NavLink>
    </li>
  )
}

export default DialogItem;
