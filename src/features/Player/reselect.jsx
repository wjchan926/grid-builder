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
);

export const getStockMonsterList = createSelector(
  getPlayer,
  player => player.stockMonsterList || []
);

export const getCurrentMonster = createSelector(
  getPlayer,
  player => player.currentMonster || []
);

export const getMonsterList = createSelector(
  getPlayer,
  player => player.monsterList || []
);

export const getSelectedMonster = createSelector(
  getPlayer,
  player => player.selectedMonster || {}
);