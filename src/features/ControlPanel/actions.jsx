import store from "../../config/store";

import { addTiles } from "../Map/actions";
import { getMap } from "../Map/reselect";
import { getDefaultTerrain } from "../ControlPanel/reselect";

import { getTileSprite, getTileNumberSprite } from "../../utils/helpers";

import { stockMonsters } from "../../data/StockMonsters";

export const SET_CONTROL_TYPE = "SET_CONTROL_TYPE";
export const SET_MAP_SIZE = "SET_MAP_SIZE";
export const SET_SELECTED_TERRAIN_TILE = "SET_SELECTED_TERRAIN_TILE";
export const SET_TILE = "SET_TILE";
export const GENERATE_STOCK_MONSTER_LIST = "GENERATE_STOCK_MONSTER_LIST";
export const SET_DEFAULT_TERRAIN = "SET_DEFAULT_TERRAIN";

export const setControlType = controlType => {
  store.dispatch({
    type: SET_CONTROL_TYPE,
    payload: controlType
  });
};

export const setMapSize = (width, height) => {
  store.dispatch({
    type: SET_MAP_SIZE,
    payload: { width, height }
  });

  addTiles(createArr([height, width]));
};

export const setMap = map => {
  const tiles = JSON.parse(map).tiles;
  const height = tiles.length;
  const width = tiles[0].length;

  store.dispatch({
    type: SET_MAP_SIZE,
    payload: { width, height }
  });
  const newMap = Array.from(tiles);
  addTiles(newMap);
};

const createArr = dimensions => {
  var array = [];

  for (var i = 0; i < dimensions[0]; ++i) {
    array.push(
      dimensions.length === 1
        ? getTileNumberSprite(getDefaultTerrain())
        : createArr(dimensions.slice(1))
    );
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

export const generateStockMonsterList = () => {
  let stockMonsterList = Array.from(stockMonsters);

  store.dispatch({
    type: GENERATE_STOCK_MONSTER_LIST,
    payload: stockMonsterList
  });
};

export const setDefaultTerrain = tile => {
  store.dispatch({
    type: SET_DEFAULT_TERRAIN,
    payload: getTileSprite(tile)
  });
};
