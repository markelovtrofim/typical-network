import {AppStateType} from '../store';

export const getUsersSelector = (state: AppStateType) => {
  return state.users.users;
};

export const getCurrentPageSelector = (state: AppStateType) => {
  return state.users.currentPage;
};

export const getTotalUsersCountSelector = (state: AppStateType) => {
  return state.users.totalUsersCount;
};

export const getPageSizeSelector = (state: AppStateType) => {
  return state.users.pageSize;
};

export const getIsLoadingSelector = (state: AppStateType) => {
  return state.users.loading;
};
