import {ADD_TILES} from "./actions"
import { SET_MAP_SIZE, SET_TILE } from "../ControlPanel/actions";

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
        tiles: action.payload
      };
    case SET_MAP_SIZE:
      return {
        ...state,
        size: action.payload
      };
    case SET_TILE:
      return {
        ...state,
        tiles: action.payload
      }
    default:
      return state;
  }
};

export default mapReducer;
