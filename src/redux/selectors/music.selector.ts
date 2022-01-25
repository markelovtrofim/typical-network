import {AppStateType} from "../store";

export const getTracks = (state: AppStateType) => {
  return state.music;
};