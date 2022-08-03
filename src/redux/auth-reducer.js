const SET_USER_DATA = "SET-USER-DATA";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const SET_MY_PROFILE_DATA = "SET-MY-PROFILE-DATA"

let initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: true,
	isAuth: false,
	myProfileData: {
		userId: null,
		lookingForAJob: null,
		lookingForAJobDescription: null,
		fullName: null,
		contacts: null,
		mainLink: null,
		photos: {
			small: null,
			big: null
		}
	}
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case SET_MY_PROFILE_DATA:
			console.log('setmyprofiledata')
			return {
				...state,
				myProfileData: { ...action.profileInfo }
			}
		default:
			return state;
	}
}

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setMyProfileData = (myProfileData) => ({ type: SET_MY_PROFILE_DATA, profileInfo: { ...myProfileData } })

export default authReducer;
