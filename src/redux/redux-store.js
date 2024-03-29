import { combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { sidebarReducer } from './sidebar-reducer';
import { usersReducer } from "./users-reducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer,
	usersPage: usersReducer,
	sidebar: sidebarReducer,
	auth: authReducer
})

let store = createStore(reducers);

window.store = store
export default store;
