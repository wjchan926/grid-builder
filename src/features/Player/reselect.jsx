import { createSelector } from "reselect";
import store from "../../config/store";

const getPlayer = () => store.getState().player;

export const getCharacterList = createSelector(
  getPlayer,
  player => player.characterList || []
);

export const getCurrentCharacter = createSelector(
  getPlayer,
  player => player.currentCharacter || {}
);

export const getSelectedPlayer = createSelector(
  getPlayer,
  player => player.selectedPlayer || {}
)