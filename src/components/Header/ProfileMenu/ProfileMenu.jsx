import React from 'react'
import defaultUserAvatar from '../../../assets/images/default-user-avatar.png'
import classes from './ProfileMenu.module.css'

const ProfileMenu = (props) => {
	return (
		<div className={classes.loginBlock}>
			<div className={classes.profileImage}>
				<img src={props.photo ? props.photo : defaultUserAvatar} alt="profile avatar" />
			</div>
			{props.login}
		</div>
	)
}

export default ProfileMenu
