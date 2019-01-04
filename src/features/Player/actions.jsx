import { DIRECTION, SPRITE_SIZE } from "../../config/constants";
import store from "../../config/store";

import uuid from "uuid";

import {
  getCharacterList,
  getCurrentCharacter,
  getSelectedPlayer,
  getCurrentMonster,
  getMonsterList,
  getSelectedMonster
} from "./reselect";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const GENERATE_CHARACTER = "GENERATE_CHARACTER";
export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";
export const SET_CURRENT_CHARACTER_LOCATION = "SET_CURRENT_CHARACTER_LOCATION";
export const SET_SELECTED_PLAYER = "SET_SELECTED_PLAYER";
export const SET_SELECTED_PLAYER_STAT = "SET_SELECTED_PLAYER_STAT";

export const SET_CURRENT_MONSTER = "SET_CURRENT_MONSTER";
export const GENERATE_MONSTER = "GENERATE_MONSTER";
export const SET_SELECTED_MONSTER = "SET_SELECTED_MONSTER";
export const SET_SELECTED_MONSTER_STAT = "SET_SELECTED_MONSTER_STAT";

const directionMove = (direction, newPos) => {
  const selectedPlayer = getSelectedPlayer();
  const walkIndex = getWalkIndex(selectedPlayer);

  let characterList = Array.from(getCharacterList());

  const playerIndex = characterList.findIndex(
    player => player.id === selectedPlayer.id
  );

  store.dispatch({
    type: SET_SELECTED_PLAYER_STAT,
    payload: Object.assign(selectedPlayer, {
      location: newPos,
      direction,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    })
  });

  characterList[playerIndex] = Object.assign(selectedPlayer, {
    position: newPos,
    direction,
    walkIndex,
    spriteLocation: getSpriteLocation(direction, walkIndex)
  });

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });
};

const getNewPosition = (oldPos, direction) => {
  switch (direction) {
    case DIRECTION.WEST:
      return [oldPos[0] - 1, oldPos[1]];
    case DIRECTION.EAST:
      return [oldPos[0] + 1, oldPos[1]];
    case DIRECTION.NORTH:
      return [oldPos[0], oldPos[1] - 1];
    case DIRECTION.SOUTH:
      return [oldPos[0], oldPos[1] + 1];
    default:
      return [oldPos[0], oldPos[1]];
  }
};

export const attemptMove = direction => {
  const oldPos = getSelectedPlayer().location;
  const newPos = getNewPosition(oldPos, direction);

  if (observeBoundaries(newPos) && observeImpassable(newPos)) {
    directionMove(direction, newPos);
  }
};

const observeBoundaries = newPos => {
  const mapWidth = store.getState().map.size.width;
  const mapHeight = store.getState().map.size.height;

  return (
    newPos[0] >= 0 &&
    newPos[0] <= mapWidth - 1 &&
    (newPos[1] >= 0 && newPos[1] <= mapHeight - 1)
  );
};

const observeImpassable = newPos => {
  const tiles = store.getState().map.tiles;
  const y = newPos[1];
  const x = newPos[0];

  const nextTile = tiles[y][x];
  return nextTile < 7;
};

const getSpriteLocation = (direction, walkIndex = 0) => {
  switch (direction) {
    case DIRECTION.EAST:
      return `${SPRITE_SIZE * 0.8 * walkIndex}px -${SPRITE_SIZE * 0.8 * 3}px`;
    case DIRECTION.WEST:
      return `${SPRITE_SIZE * 0.8 * walkIndex}px -${SPRITE_SIZE * 0.8 * 2}px`;
    case DIRECTION.NORTH:
      return `${SPRITE_SIZE * 0.8 * walkIndex}px -${SPRITE_SIZE * 0.8 * 1}px`;
    case DIRECTION.SOUTH:
      return `${SPRITE_SIZE * 0.8 * walkIndex}px ${SPRITE_SIZE * 0.8 * 0}px`;
    default:
  }
};

const getWalkIndex = selectedPlayer => {
  const walkIndex = selectedPlayer.walkIndex;

  return walkIndex >= 2 ? 0 : walkIndex + 1;
};

export const generateCharacter = character => {
  let characterList = Array.from(getCharacterList());

  const playerIndex = characterList.findIndex(
    player => player.id === character.id
  );

  if (playerIndex === -1) {
    characterList.push(character);
  } else {
    characterList[playerIndex] = Object.assign({}, character);
  }

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });
};

export const setCurrentCharacter = character => {
  store.dispatch({
    type: SET_CURRENT_CHARACTER,
    payload: Object.assign({}, character)
  });
};

export const setPlayerLocation = (rowIndex, columnIndex) => {
  const currentCharacter = getCurrentCharacter();
  const startPos = [columnIndex, rowIndex];

  let characterList = Array.from(getCharacterList());

  const playerIndex = characterList.findIndex(
    player => player.id === currentCharacter.id
  );

  characterList[playerIndex] = Object.assign(currentCharacter, {
    location: startPos,
    visible: true
  });

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });
};

export const deleteCharacter = character => {
  let characterList = Array.from(getCharacterList());

  const playerIndex = characterList.findIndex(
    player => player.id === character.id
  );

  characterList.splice(playerIndex, 1);

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });
};

export const setSelectedPlayer = character => {
  store.dispatch({
    type: SET_SELECTED_PLAYER,
    payload: Object.assign({}, character)
  });
};

export const setStatValue = stat => {
  const selectedPlayer = getSelectedPlayer();

  store.dispatch({
    type: SET_SELECTED_PLAYER_STAT,
    payload: Object.assign(selectedPlayer, stat)
  });

  let characterList = Array.from(getCharacterList());

  const playerIndex = characterList.findIndex(
    player => player.id === selectedPlayer.id
  );

  characterList[playerIndex] = Object.assign(selectedPlayer, stat);

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });
};

///////////////////////////////////////
////////   Monster Functions   ////////
///////////////////////////////////////

export const setCurrentMonster = monster => {
  store.dispatch({
    type: SET_CURRENT_MONSTER,
    payload: Object.assign({}, monster)
  });
};

export const setMonsterLocation = (rowIndex, columnIndex) => {
  const currentMonster = getCurrentMonster();
  const startPos = [columnIndex, rowIndex];

  let monsterList = Array.from(getMonsterList());

  const monsterIndex = monsterList.findIndex(
    monster => monster.id === currentMonster.id
  );

  if (monsterIndex === -1) {
    addMonsterToList(currentMonster, startPos);
  } else {
    monsterList[monsterIndex] = Object.assign(currentMonster, {
      location: startPos,
      visible: true
    });

    store.dispatch({
      type: GENERATE_MONSTER,
      payload: monsterList
    });
  }
};

const addMonsterToList = (monster, startPos) => {
  const monsterList = Array.from(getMonsterList());
  const oldMonster = Object.assign({}, monster);
  const newMonster = Object.assign(monster, {
    id: uuid.v4(),
    location: startPos,
    visible: true
  });
  monsterList.push(Object.assign({}, newMonster));

  store.dispatch({
    type: GENERATE_MONSTER,
    payload: monsterList
  });

  store.dispatch({
    type: SET_CURRENT_MONSTER,
    payload: oldMonster
  });
};

export const setSelectedMonster = monster => {
  store.dispatch({
    type: SET_SELECTED_MONSTER,
    payload: Object.assign({}, monster)
  });
};

export const deleteMonster = currentMonster => {
  let monsterList = Array.from(getMonsterList());

  const monsterIndex = monsterList.findIndex(
    monster => monster.id === currentMonster.id
  );

  monsterList.splice(monsterIndex, 1);

  store.dispatch({
    type: GENERATE_MONSTER,
    payload: monsterList
  });
};

export const attemptMonsterMove = direction => {
  const oldPos = getSelectedMonster().location;
  const newPos = getNewPosition(oldPos, direction);

  if (observeBoundaries(newPos) && observeImpassable(newPos)) {
    directionMoveMonster(direction, newPos);
  }
};

const directionMoveMonster = (direction, newPos) => {
  const selectedMonster = getSelectedMonster();

  let monsterList = Array.from(getMonsterList());

  const monsterIndex = monsterList.findIndex(
    monster => monster.id === selectedMonster.id
  );

  store.dispatch({
    type: SET_SELECTED_MONSTER_STAT,
    payload: Object.assign(selectedMonster, {
      location: newPos
    })
  });

  monsterList[monsterIndex] = Object.assign(selectedMonster, {
    position: newPos
  });

  store.dispatch({
    type: GENERATE_MONSTER,
    payload: monsterList
  });
};

export const setMonsterStatValue = stat => {
  const selectedMonster = getSelectedMonster();

  store.dispatch({
    type: SET_SELECTED_MONSTER_STAT,
    payload: Object.assign(selectedMonster, stat)
  });

  let monsterList = Array.from(getMonsterList());

  const monsterIndex = monsterList.findIndex(
    monster => monster.id === selectedMonster.id
  );

  monsterList[monsterIndex] = Object.assign(selectedMonster, stat);

  store.dispatch({
    type: GENERATE_MONSTER,
    payload: monsterList
  });
};

///////////////////////////////////////
//   Player and Monster Functions   ///
///////////////////////////////////////

export const resetPieces = () => {
  let characterList = Array.from(getCharacterList());
  let monsterList = Array.from(getMonsterList());

  characterList.forEach(character => {
    character.visible = false;
  });

  monsterList.forEach(monster => {
    monster.visible = false;
  });

  store.dispatch({
    type: GENERATE_CHARACTER,
    payload: characterList
  });

  store.dispatch({
    type: GENERATE_MONSTER,
    payload: monsterList
  });
};
