import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import messagesReducer from "./messages-reducer"
import profileReducer from "./profile-reducer"
import userReducer from "./user-reducer"
import navbarReducer from "./navbar-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import funcReducer from "./func-reducer"
import appReducer from "./app-reducer"
import {usersReducer} from "./reducers/users-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: userReducer,
    navbar: navbarReducer,
    auth: authReducer,
    func: funcReducer,
    form: formReducer,
    users: usersReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)))

declare global {
    interface Window {
        __store__: any
    }
}

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AppDispatch = typeof store.dispatch;

window.__store__ = store
export default store