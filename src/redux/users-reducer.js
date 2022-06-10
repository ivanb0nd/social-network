const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = "SET-USERS";

let initialState = {
  users: []
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: !u.followed
            }
          } else {
            return u
          }
        })
      }
    case SET_USERS:
      if (state.users.length > 0) {
        return state
      }
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

// AC - action creator
export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });



