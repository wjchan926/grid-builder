import { ADD_TILES } from "./actions";
import {
  SET_MAP_SIZE,
  SET_TILE,
  SET_GAME_STATE
} from "../ControlPanel/actions";
import { tiles } from "../../data/Maps/1";

const initialState = {
  tiles,
  size: {
    width: tiles[0].length,
    height: tiles.length
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
      };
    case SET_GAME_STATE:
      return action.payload.map;
    default:
      return state;
  }
};

export default mapReducer;
