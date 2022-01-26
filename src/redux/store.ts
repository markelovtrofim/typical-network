import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

import {usersReducer, musicReducer, authReducer} from "./reducers";

import messages from "./reducers/messages";
import profile from "./reducers/profile";

let reducers = combineReducers({
  auth: authReducer,
  profile: profile,
  users: usersReducer,
  music: musicReducer,
  messages: messages,
  form: formReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

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