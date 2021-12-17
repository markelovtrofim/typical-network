import {InferActionsTypes} from '../store';
import {usersAPI} from '../../api/users-api';
import {UserType} from '../../types/types';


export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
  switch (action.type) {
    case 'TN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};


// ACTIONS
export const actions = {
  setUsers: (users: UserType[]) => ({type: 'TN/USERS/SET_USERS', users})
};

// THUNK
export const getUsers = (page: number, pageSize: number) => async (dispatch: any) => {
  const data = await usersAPI.getUsers(page, pageSize);
  dispatch(actions.setUsers(data.items));
};

export const follow = (id: number) => async (dispatch: any) => {
  return null;
};

export const unFollow = (id: number) => async (dispatch: any) => {
  return null;
};

// TYPES
const initialState = {
  users: []
}

interface InitialStateType {
  users: UserType[]
}

type ActionsTypes = InferActionsTypes<typeof actions>
