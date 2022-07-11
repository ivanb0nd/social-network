const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const NEXT_PAGE = "NEXT-PAGE";
const PREV_PAGE = "PREV-PAGE";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1
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
      return {
        ...state,
        users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case NEXT_PAGE:
      console.log('switched')
      console.log(state)
      return {
        ...state,
        currentPage: state.currentPage + 1
      }
    case PREV_PAGE:
      console.log('switched')
      console.log(state)

      return {
        ...state,
        currentPage: state.currentPage - 1
      }
    default:
      return state;
  }
}

// AC - action creator
export const toggleFollowAC = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const nextPageAC = (totalUsersCount) => ({ type: NEXT_PAGE })
export const prevPageAC = (totalUsersCount) => ({ type: PREV_PAGE })


