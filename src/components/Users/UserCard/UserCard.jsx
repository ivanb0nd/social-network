import classes from './UserCard.module.css';
import defaultUserAvatar from '../../../assets/images/default-user-avatar.png'
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../../api/api';

const UserCard = (props) => {
	return (
		<div className={classes.userCard}>
			<div className={classes.userCard__left}>
				<NavLink to={`/profile/${props.id}`}>
					<div className={classes.userCard__image}>
						<img src={props.photos.small !== null ? props.photos.small : defaultUserAvatar} alt="user avatar" />
					</div>
				</NavLink>
				<div className={classes.userCard__follow}>
					{props.followed === false
						? <button onClick={() => {
							userAPI
								.follow(props.id)
								.then(resultCode => {
									if (resultCode === 0) {
										props.follow(props.id);
									}
								})
						}} className='primary_button'>Follow</button>
						: <button onClick={() => {
							userAPI
								.unfollow(props.id)
								.then(resultCode => {
									if (resultCode === 0) {
										props.follow(props.id);
									}
								})
						}} className='primary_button'>Unfollow</button>
					}
				</div>
			</div>
			<div className={classes.userCard__right}>
				<div className={classes.userCard__profile_info}>
					<span className={classes.userCard__fullName}>{props.name}</span>
					<span className={classes.userCard__status}>{props.status}</span>
				</div>
				{props.country || props.city ?
					<div className={classes.userCard__profile_location}>
						<span>{props.country}</span>
						<span>{props.city}</span>
					</div>
					: ''}

			</div>
		</div>
	)
}

export default UserCard;
