import store from "../../config/store";

import { addTiles } from "../Map/actions";
import { getMap } from "../Map/reselect";

import { getTileSprite, getTileNumberSprite } from "../../utils/helpers";

export const SET_CONTROL_TYPE = "SET_CONTROL_TYPE";
export const SET_MAP_SIZE = "SET_MAP_SIZE";
export const SET_SELECTED_TERRAIN_TILE = "SET_SELECTED_TERRAIN_TILE";
export const SET_TILE = "SET_TILE";

export const setControlType = controlType => {
  store.dispatch({
    type: SET_CONTROL_TYPE,
    payload: { controlType }
  });
};

export const setMapSize = (width, height) => {
  store.dispatch({
    type: SET_MAP_SIZE,
    payload: { width, height }
  });

  addTiles(createArr([height, width]));
};

const createArr = dimensions => {
  var array = [];

  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length === 1 ? 0 : createArr(dimensions.slice(1)));
  }

  return array;
};

export const setSelectedTerrainTile = tile => {
  store.dispatch({
    type: SET_SELECTED_TERRAIN_TILE,
    payload: getTileSprite(tile)
  });
};

export const setTile = (rowIndex, columnIndex, selectedTerrain) => {
  let tiles = Array.from(getMap().tiles);

  tiles[rowIndex][columnIndex] = getTileNumberSprite(selectedTerrain);

  store.dispatch({
    type: SET_TILE,
    payload: tiles
  });
};
