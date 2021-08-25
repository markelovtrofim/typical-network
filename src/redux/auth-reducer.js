import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const UN_REGISTER = 'auth/UN_REGISTER';

let initialState = {
    id: 0,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case UN_REGISTER:
            return {
                ...state
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}});

export const getMe = () => async (dispatch) => {
    let response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
    return response
}

export const signInThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.signInAPI(email, password, rememberMe)
    if (response.resultCode === 0) {
        dispatch(getMe())
    }
    return response
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;
