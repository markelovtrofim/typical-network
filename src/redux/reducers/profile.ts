import {profileAPI, userAPI} from "../../api/api"
import {PostType, ProfileType} from "../../types"
import {InferActionsTypes} from "../store";

const initialState = {
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

const profile = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      let newPost = {id: 6, message: action.post}
      return {
        ...state,
        posts: [newPost, ...state.posts]
      };
    }
    case 'profile/SET_USER_PROFILE':
      return {
        ...state,
        profile: {...state.profile, data: action.profile}
      }
    case 'profile/SET_STATUS':
      return {
        ...state,
        profile: {...state.profile, status: action.status}
      }
    case 'profile/IS_OWNER':
      return {
        ...state,
        profile: {...state.profile, isOwner: action.bool}
      }
    case 'profile/SAVE_PHOTO_SUCCESS':
      return {...state, profile: {...state.profile, data: {...state.profile.data, photos: action.photos}}}
    default:
      return state
  }
}

export const actions = {
  addPost: (post: PostType) => ({type: 'profile/ADD-POST', post} as const),
  setUserProfile: (profile: object) => ({type: 'profile/SET_USER_PROFILE', profile}as const),
  setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
  setOwner: (bool: boolean) => ({type: 'profile/IS_OWNER', bool} as const),
  savePhotoSuccess: (photos: object) => ({type: 'profile/SAVE_PHOTO_SUCCESS', photos} as const),
}


export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await userAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: string) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userID = getState().auth.id;
  let response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userID))
  }
}

export default profile

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
