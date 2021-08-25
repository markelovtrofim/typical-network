import {userAPI} from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "users/SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const UPDATE_CURRENT_PAGE = "users/UPDATE_CURRENT_PAGE";

let initialState = {
    users: [],
    pageSize: 18,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    buttonsIsBlocks: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
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
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.num
            }
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (newId) => ({type: SET_CURRENT_PAGE, currentPage: newId});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount});
export const toggleIsFetching = (bool) => ({type: TOGGLE_IS_FETCHING, bool});
export const updateCurrentPage = (num) => ({type: UPDATE_CURRENT_PAGE, num})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount));
}

export const changeUsers = (p, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(p))
    let data = await userAPI.getUsers(p, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
}

export const isFollow = (id) => async (dispatch) => {
    let data = await userAPI.postUsers(id)
    if (data.resultCode === 0) {
        dispatch(follow(id))
    }
}

export const isUnFollow = (id) => async (dispatch) => {
    let data = await userAPI.deleteUsers(id)
    if (data.resultCode === 0) {
        dispatch(unfollow(id))
    }
}

export default usersReducer;
