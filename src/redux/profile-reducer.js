import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const DRAW_LOAD = 'profile/DRAW_LOAD';
const SET_STATUS = 'profile/SET_STATUS';
const OWNER = 'profile/IS_OWNER';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир."},
        {id: 2, message: "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир." +
                         "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир."}
    ],
    profile: {
        title: {
            main: {
                aboutMe: 'About Me',
                biography: 'Biography',
                contact: 'Contact',
                work: 'Work Experience',
            }
        },
        data: false,
        status: '',
        isOwner: false
    },
};

const profileReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 6, message: action.post, likesCount: "0"};
            return {
                ...state,
                posts: [newPost, ...state.posts]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...state.profile, data: action.profile}
            }
        }
        case DRAW_LOAD: {
            return {
                ...state,
                loading: action.bool
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case OWNER: {
            return {
                ...state,
                profile: {...state.profile, isOwner: action.bool}
            }
        }
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, data: {...state.profile.data, photos: action.photos }}}
        default:
            return state;
    }
};

export const addPost = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const drawLoad = (bool) => ({type: DRAW_LOAD, bool});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const owner = (bool) => ({type: OWNER, bool})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.id;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(userID));
    }
}

export default profileReducer;
