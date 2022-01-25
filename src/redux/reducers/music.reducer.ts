import {TrackType} from "../../types";
import {musicAPI} from "../../api/music.api";
import {InferActionsTypes} from "../store";

// STATE
const initialState = {
  tracks: null as TrackType[] | null,
  trackInfo: null as TrackType | null
};

// REDUCER
const musicReducer = (state: InitialStateType = initialState, action: ActionsType) => {
  switch (action.type) {
    case "music/SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks
      }
    default:
      return state;
  }
};

// ACTIONS
export const actions = {
  setTracks: (tracks: TrackType[]) => ({type: 'music/SET_TRACKS', tracks} as const),
}

// THUNK
export const getTracks = () => async (dispatch: any) => {
  let data = await musicAPI.getTracks();
  dispatch(actions.setTracks(data));
};

// TYPES
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>

export default musicReducer;