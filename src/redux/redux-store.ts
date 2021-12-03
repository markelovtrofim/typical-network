import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./user-reducer"
import navbarReducer from "./navbar-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import funcReducer from "./func-reducer"
import appReducer from "./app-reducer"

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    auth: authReducer,
    func: funcReducer,
    form: formReducer
})
type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)))

declare global {
    interface Window {
        __store__: any
    }
}
window.__store__ = store
export default store