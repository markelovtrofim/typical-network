import {authAPI} from "../../api/auth.api";
import {InferActionsTypes} from "../store";

const initialState: InitialStateType = {
  id: 0,
  email: null,
  login: null,
  isAuth: false,
  captchaParam: null
};

const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'auth/SET_AUTH_USER_DATA':
      return {...action.authData};
    case 'auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        captchaParam: action.url
      };
    default:
      return state;
  }
};

const actions = {
  setAuthUserData: (authData: any) => ({type: 'auth/SET_AUTH_USER_DATA', authData} as const),
  getCaptchaUrlSuccess: (url: string) => ({type: 'auth/GET_CAPTCHA_URL_SUCCESS', url} as const)
};

export const getMe = () => async (dispatch: any) => {
  let response = await authAPI.getMe();
  if (response.data.resultCode === 0) dispatch(actions.setAuthUserData({...response.data.data, isAuth: true}));
  return response;
};

export const captchaUrl = () => async (dispatch: any) => {
  const response = await authAPI.captcha();
  const captchaUrl = response.data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logInThunk = (values: {email: string, password: string, rememberMe?: boolean, captcha?: string}) => async (dispatch: any) => {
  let response = await authAPI.signInAPI(values.email, values.password, values.rememberMe, values.captcha);
  if (response.resultCode === 0) dispatch(getMe());
  else if (response.resultCode === 10) dispatch(captchaUrl());
  return response;
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response) dispatch(actions.setAuthUserData({id: null, email: null, login: null, isAuth: false}));
};

type InitialStateType = {
  id: number
  email: string | null
  login: string | null
  isAuth: false
  captchaParam: string | null
}
type ActionsType = InferActionsTypes<typeof actions>

export default authReducer;