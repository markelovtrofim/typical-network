// @ts-ignore
import {getMe} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}
let initialState = {
    initialized: false
};

const appReducer = (state=initialState, action:any):InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

type InitializedActionType = {
    type: typeof SET_INITIALIZED
}
export const initialized = ():InitializedActionType => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch:any) => {
    const promise = dispatch(getMe());
    Promise.all([promise])
        .then(() => {
            dispatch(initialized())
        }
    )
}

export default appReducer;
