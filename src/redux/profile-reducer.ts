import {profileAPI, userAPI} from "../api/api";
import {PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const OWNER = 'profile/IS_OWNER';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

type initialStateType = {
  newPostText: string
  posts: Array<PostType>
  profile: ProfileType
}

let initialState: initialStateType = {
  newPostText: "",
  posts: [
    {
      id: 1,
      message: "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир."
    },
    {
      id: 2,
      message: "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир." +
        "Привет мир это пост заглушка. Когда dev созреет он вставит посты каждого пользователя. Всем мир."
    }
  ],
  profile: {
    status: '',
    isOwner: false,
    title: {
      aboutMe: 'About Me',
      biography: 'Biography',
      contact: 'Contact',
      work: 'Work Experience'
    },
    data: {}
  },
}

const profileReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {id: 6, message: action.post};
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
    case SET_STATUS: {
      return {
        ...state,
        profile: {...state.profile, status: action.status}
      }
    }
    case OWNER: {
      return {
        ...state,
        profile: {...state.profile, isOwner: action.bool}
      }
    }
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, data: {...state.profile.data, photos: action.photos}}}
    default:
      return state
  }
}

type ActionsType = addPostType | setUserProfileType | setStatusType | ownerType | savePhotoSuccessType

type addPostType = {
  type: typeof ADD_POST
  post: string
}
export const addPost = (post: any): addPostType => ({type: ADD_POST, post})

type setUserProfileType = {
  type: typeof SET_USER_PROFILE
  profile: object
}
export const setUserProfile = (profile: object): setUserProfileType => ({type: SET_USER_PROFILE, profile})

type setStatusType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status})

type ownerType = {
  type: typeof OWNER
  bool: boolean
}
export const owner = (bool: boolean): ownerType => ({type: OWNER, bool})

type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: object
}
export const savePhotoSuccess = (photos: object): savePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await userAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file: string) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: any) => async (dispatch: any, getState: any) => {
  const userID = getState().auth.id;
  let response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userID))
  }
}

export default profileReducer
