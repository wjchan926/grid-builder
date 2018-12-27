import { createSelector } from "reselect";
import store from "../../../../config/store";

const getControls = () => store.getState().controls;

export const getSelectedTerrain =
  createSelector(
    getControls,
    controls => controls.selectedTerrain
  );
