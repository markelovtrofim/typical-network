import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import {usersReducer, musicReducer} from "./reducers";

import messages from "./reducers/messages";
import profile from "./reducers/profile";
import auth from "./reducers/auth.reducer";
import func from "./reducers/func";
import app from "./reducers/app";

let reducers = combineReducers({
    app: app,
    profile: profile,
    users: usersReducer,
    music: musicReducer,
    messages: messages,
    auth: auth,
    func: func,
    form: formReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

declare global {
    interface Window {
        __store__: any
    }
}

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AppDispatch = typeof store.dispatch

window.__store__ = store;
export default store;