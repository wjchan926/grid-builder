import { CONTROL_TYPE } from "../../config/constants";
import { SET_CONTROL_TYPE } from "./actions";
import { SET_SELECTED_TERRAIN_TILE } from "./actions";

const initialState = {
  controlType: CONTROL_TYPE.PLAY,
  selectedTerrain: "none"
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

    default:
      return state;
  }
};

export default controlsReducer;
