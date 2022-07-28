import classes from './Header.module.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData, toggleIsFetching } from '../../redux/auth-reducer'

function Header(props) {
	useEffect(() => {
		axios
			.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
			.then((response) => {
				if (response.data.resultCode === 0) {
					let { id, email, login } = response.data.data
					props.setAuthUserData(id, email, login);
					props.toggleIsFetching(false);
				}
			})
	})

	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<img src={logo} alt="logo" />
			</div>
			<div className={classes.loginBlock}>
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

			</div>
		</header>
	);
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData, toggleIsFetching })(Header);
