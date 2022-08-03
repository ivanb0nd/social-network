import classes from './Header.module.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData, toggleIsFetching, setMyProfileData } from '../../redux/auth-reducer'
import ProfileMenu from './ProfileMenu/ProfileMenu';

function Header(props) {
	useEffect(() => {
		if (!props.isAuth) {
			axios
				.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
				.then((response) => {
					if (response.data.resultCode === 0) {
						let { id, email, login } = response.data.data
						props.setAuthUserData(id, email, login);
						return id;
					}
				})
				.then((id) => {
					axios
						.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
						.then(response => {
							props.setMyProfileData(response.data)
							props.toggleIsFetching(false);
							console.log(response.data)
						})
						.catch(err => console.log(err));
				})

			if (props.id) {

			}
		}
	})
	window.data = props.myProfileData
	return (
		<header className={classes.header}>
			<NavLink to={'/'} className={classes.logo}>
				<img src={logo} alt="logo" />
			</NavLink>
			{(!props.isAuth && props.isFetching) ? <NavLink to={'/login'}>Login</NavLink> : <ProfileMenu login={props.login} photo={props.myProfileData.photos.small} />}
		</header>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isFetching: state.auth.isFetching,
	login: state.auth.login,
	id: state.auth.id,
	myProfileData: state.auth.myProfileData
});

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching, setMyProfileData })(Header);
