import store from "../../../../config/store";
import { addTiles } from "../../../World/actions";
import { getTileSprite } from "../../../Map/MapTile";

export const SET_MAP_SIZE = "SET_MAP_SIZE";
export const SET_SELECTED_TERRAIN_TILE = "SET_SELECTED_TERRAIN_TILE";

export const setMapSize = async (width, height) => {
  await store.dispatch({
    type: SET_MAP_SIZE,
    payload: { width, height }
  });

  await addTiles(createArr([height, width]));
};

const createArr = dimensions => {
  var array = [];

  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(dimensions.length === 1 ? 0 : createArr(dimensions.slice(1)));
  }

  return array;
};

export const setSelectedTerrainTile = async tile => {
  await store.dispatch({
    type: SET_SELECTED_TERRAIN_TILE,
    payload: getTileSprite(tile)
  });
};
