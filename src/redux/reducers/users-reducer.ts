import {AppDispatch, InferActionsTypes} from '../store';
import {usersAPI} from '../../api/users-api';
import {FilterType, UserType} from '../../types/types';


const initialState = {
  users: [] as UserType[],
  currentPage: 1,
  pageSize: 18,
  totalUsersCount: null as null | number,
  filter: {
    term: '',
    friends: null as null | boolean
  },
  loading: false
};

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'TN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users
      };
    case 'TN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.page
      };
    case 'TN/USERS/IS_LOADING':
      return {
        ...state,
        loading: action.isLoading
      };
    case 'TN/USERS/SET_FILTER':
      return {
        ...state,
        filter: action.filter
      }
    case 'TN/USERS/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    default:
      return state;
  }
};


// ACTIONS
export const actions = {
  setUsers: (users: UserType[]) => ({type: 'TN/USERS/SET_USERS', users: users} as const),
  setCurrentPage: (page: number) => ({type: 'TN/USERS/SET_CURRENT_PAGE', page} as const),
  setTotalUsersCount: (totalCount: number) => ({type: 'TN/USERS/SET_TOTAL_USERS_COUNT', totalCount} as const),
  setFilter: (filter: FilterType) => ({type: 'TN/USERS/SET_FILTER', filter} as const),
  isLoading: (isLoading: boolean) => ({type: 'TN/USERS/IS_LOADING', isLoading} as const),
};

// THUNK
export const requestUsers = (page: number, pageSize: number, filter: FilterType) => async (dispatch: AppDispatch) => {
  dispatch(actions.isLoading(true));
  dispatch(actions.setCurrentPage(page));
  dispatch(actions.setFilter(filter))
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
  dispatch(actions.isLoading(false));
};

export const follow = (id: number) => async (dispatch: AppDispatch) => {
  return null;
};

export const unFollow = (id: number) => async (dispatch: AppDispatch) => {
  return null;
};

// TYPES
type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
