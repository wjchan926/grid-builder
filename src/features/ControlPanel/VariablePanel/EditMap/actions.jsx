import store from "../../../../config/store";
import { addTiles } from "../../../World/actions";

export const SET_MAP_SIZE = "SET_MAP_SIZE";

export const setMapSize = async (width, height) => {
  await store.dispatch({
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
