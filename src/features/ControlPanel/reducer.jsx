import { CONTROL_TYPE } from "../../config/constants";
import {
  SET_CONTROL_TYPE,
  SET_DEFAULT_TERRAIN,
  SET_GAME_STATE
} from "./actions";
import { SET_SELECTED_TERRAIN_TILE } from "./actions";

const initialState = {
  controlType: CONTROL_TYPE.PLAY,
  selectedTerrain: null,
  defaultTerrain: "grass"
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTROL_TYPE:
      return {
        ...state,
        controlType: action.payload
      };
    case SET_SELECTED_TERRAIN_TILE:
      return {
        ...state,
        selectedTerrain: action.payload
      };
    case SET_DEFAULT_TERRAIN:
      return {
        ...state,
        defaultTerrain: action.payload
      };
    case SET_GAME_STATE:
      return action.payload.controls;
    default:
      return state;
  }
};

export default controlsReducer;
