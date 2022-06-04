import classes from './FriendItem.module.css';
import { NavLink } from "react-router-dom";

function FriendItem(props) {
  return (
    <li className={classes.friend}>
      <NavLink to={`/friend/${props.id}`}>
        <div className={classes.friend_avatar}>
          <img src={props.image} alt="Friend avatar" />
        </div>
        <div className={classes.friend_name}>{props.name}</div>
      </NavLink>
    </li>
  )
}

export default FriendItem;
