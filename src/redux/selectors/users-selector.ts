import {AppStateType} from '../store';

export const getUsersSelector = (state: AppStateType) => {
  return state.users.users;
};

export const getCurrentPageSelector = (state: AppStateType) => {
  return state.users.currentPage;
};
