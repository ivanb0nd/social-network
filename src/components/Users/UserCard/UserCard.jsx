import classes from './UserCard.module.css';
import defaultUserAvatar from '../../../assets/images/default-user-avatar.png'

const UserCard = (props) => {
  return (
    <div className={classes.userCard}>
      <div className={classes.userCard__left}>
        <div className={classes.userCard__image}>
          <img src={props.photos.small !== null ? props.photos.small : defaultUserAvatar} alt="user avatar" />
        </div>
        <div className={classes.userCard__follow}>
          {props.followed === false
            ? <button onClick={() => { props.follow(props.id) }} className='primary_button'>Follow</button>
            : <button onClick={() => { props.follow(props.id) }} className='primary_button'>Unfollow</button>
          }
        </div>
      </div>
      <div className={classes.userCard__right}>
        <div className={classes.userCard__profile_info}>
          <span className={classes.userCard__fullName}>{props.name}</span>
          <span className={classes.userCard__status}>{props.status}</span>
        </div>
        <div className={classes.userCard__profile_location}>
          <span>{props.country}</span>
          <span>{props.city}</span>
        </div>
      </div>
    </div>
  )
}

export default UserCard;
