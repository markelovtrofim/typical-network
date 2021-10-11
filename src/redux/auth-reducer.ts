// @ts-ignore
import {authAPI} from "../api/api"

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

type initialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaParam: string | null
}

type ActionsTypes = setAuthUserDataType | getCaptchaUrlSuccessType

let initialState:initialStateType = {
    id: 0,
    email: null,
    login: null,
    isAuth: false,
    captchaParam: null
}

const authReducer = (state=initialState, action: ActionsTypes):initialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: action.data.isAuth
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaParam: action.url
            }
        default:
            return state
    }
}

type setAuthUserDataDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type setAuthUserDataType = {
    type: typeof SET_AUTH_USER_DATA
    data: setAuthUserDataDataType
}
export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):setAuthUserDataType => ({type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}})

type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    url: string
}
export const getCaptchaUrlSuccess = (url: string):getCaptchaUrlSuccessType => ({type: GET_CAPTCHA_URL_SUCCESS, url})

export const getMe = () => async (dispatch: any) => {
    let response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    return response
}

export const captchaUrl = () => async (dispatch: any) => {
    const response = await authAPI.captcha()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const signInThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    let response = await authAPI.signInAPI(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getMe())
    } else if (response.resultCode === 10) {
        dispatch(captchaUrl())
    }
    return response
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer