import { createSelector } from "reselect";
import store from "../../config/store";

const getControls = () => store.getState().controls;

export const getSelectedTerrain = createSelector(
  getControls,
  controls => controls.selectedTerrain || ""
);

export const getControlType = createSelector(
  getControls,
  controls => controls.controlType || null
);

export const getDefaultTerrain = createSelector(
  getControls,
  controls => controls.defaultTerrain || ""
);
