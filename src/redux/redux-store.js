import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./user-reducer";
import navbarReducer from "./navbar-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import funcReducer from "./func-reducer";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    func: funcReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store;
export default store;
