import {ADD_TILES} from "../World/actions"
import { SET_MAP_SIZE } from "../ControlPanel/VariablePanel/EditMap/actions";

const initialState = {
  tiles: [],
  size: {
    width: 25,
    height: 15
  }
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILES:
      return {
        ...state,
        ...action.payload
      };
    case SET_MAP_SIZE:
      return {
        ...state,
        size: action.payload
      };
    default:
      return state;
  }
};

export default mapReducer;
