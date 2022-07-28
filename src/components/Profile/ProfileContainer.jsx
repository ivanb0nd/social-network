import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profile-reducer';
import { useLocation, useParams } from 'react-router-dom';

function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let params = useParams();

		console.log(location)
		console.log(params)

		return (
			<Component {...props} router={{ location, params }} />
		)
	}

	return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId;
		console.log(userId)
		if (!userId) {
			this.props.setUserProfile(this.props.myProfile)
			return;
		}

		axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
			.then(response => {
				this.props.setUserProfile(response.data);
			})
			.catch(error => { console.log(error) })
	}

	componentDidUpdate() {
		let userId = this.props.router.params.userId;
		console.log(userId)
		if (!userId) {
			this.props.setUserProfile(this.props.myProfile)
			return;
		}
	}

	render() {
		return (
			<div>

				<Profile {...this.props} />
			</div>
		);
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	myProfile: state.profilePage.myProfileData
})




export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
