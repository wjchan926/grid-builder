import { createSelector } from "reselect";
import store from "../../config/store";

export const getMap = () => store.getState().map;

export const getTiles = createSelector(
  getMap,
  map => map.tiles || []
);