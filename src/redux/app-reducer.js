import {getMe} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED';

let initialState = {
    initialized: false
};

const appReducer = (state=initialState, action) => {
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

export const initialized = () => ({type: SET_INITIALIZED})

export const initializeApp = () => async (dispatch) => {
    const promise = dispatch(getMe());
    Promise.all([promise])
        .then(() => {
            dispatch(initialized())
        }
    )
}

export default appReducer;
