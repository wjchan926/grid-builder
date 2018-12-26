import store from "../../config/store";
// import { tiles } from "../../data/Maps/1";

export const ADD_TILES = "ADD_TILES";

export const addTiles = (tiles) =>
  store.dispatch({
    type: ADD_TILES,
    payload: { tiles }
  });
