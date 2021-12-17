import {AppStateType} from "../store";

export const getUsersSelector = (state: AppStateType) => {
  return state.users.users;
}
