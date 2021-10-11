import {userAPI} from "../api/api"
import {UsersType} from "../types/types"

const FOLLOW = "users/FOLLOW"
const UNFOLLOW = "users/UNFOLLOW"
const SET_USERS = "users/SET_USERS"
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "users/SET_TOTAL_USER_COUNT"
const UPDATE_CURRENT_PAGE = "users/UPDATE_CURRENT_PAGE"
const BUTTON_DISABLE = "users/BUTTON_DISABLE"

type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    disable: boolean
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 18,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    disable: false
}

type ActionsType = followType | unfollowType | setUsersType | setCurrentPageType | setTotalUsersCountType | updateCurrentPageType | buttonDisableType

const usersReducer = (state = initialState, action: ActionsType) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUserCount: action.totalCount
            }
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.num
            }
        case BUTTON_DISABLE:
            return {
                ...state,
                disable: action.bool
            }
        default:
            return state
    }
}

type followType = {
    type: typeof FOLLOW
    userId: number
}
export const follow = (userId: number): followType => ({type: FOLLOW, userId: userId})

type unfollowType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollow = (userId: number): unfollowType => ({type: UNFOLLOW, userId: userId})

type setUsersType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export const setUsers = (users: Array<UsersType>): setUsersType => ({type: SET_USERS, users: users})

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (newId: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage: newId})

type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USER_COUNT
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => ({type: SET_TOTAL_USER_COUNT, totalCount})

type updateCurrentPageType = {
    type: typeof UPDATE_CURRENT_PAGE
    num: number
}
export const updateCurrentPage = (num: number): updateCurrentPageType => ({type: UPDATE_CURRENT_PAGE, num})

type buttonDisableType = {
    type: typeof BUTTON_DISABLE
    bool: boolean
}
export const buttonDisable = (bool: boolean): buttonDisableType => ({type: BUTTON_DISABLE, bool})

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const changeUsers = (p: number, pageSize: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(p))
    let data = await userAPI.getUsers(p, pageSize)
    dispatch(setUsers(data.items))
}

export const isFollow = (id: number) => async (dispatch: any) => {
    dispatch(buttonDisable(true))
    let data = await userAPI.postUsers(id)
    if (data.resultCode === 0) {
        dispatch(follow(id))
    }
    dispatch(buttonDisable(false))
}

export const isUnFollow = (id: number) => async (dispatch: any ) => {
    dispatch(buttonDisable(true))
    let data = await userAPI.deleteUsers(id)
    if (data.resultCode === 0) {
        dispatch(unfollow(id))
    }
    dispatch(buttonDisable(false))
}

export default usersReducer
