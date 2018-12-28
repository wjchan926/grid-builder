import { DIRECTION, SPRITE_SIZE } from "../../config/constants";
import store from "../../config/store";
import { getCharacterList } from "./reselect";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const GENERATE_CHARACTER = "GENERATE_CHARACTER";
export const SET_CURRENT_CHARACTER = "SET_CURRENT_CHARACTER";

const directionMove = (direction, newPos) => {
  const walkIndex = getWalkIndex();

  store.dispatch({
    type: MOVE_PLAYER,
    payload: {
      position: newPos,
      direction,
      walkIndex,
      spriteLocation: getSpriteLocation(direction, walkIndex)
    }
  });
};

const getNewPosition = (oldPos, direction) => {
  switch (direction) {
    case DIRECTION.WEST:
      return [oldPos[0] - SPRITE_SIZE, oldPos[1]];
    case DIRECTION.EAST:
      return [oldPos[0] + SPRITE_SIZE, oldPos[1]];
    case DIRECTION.NORTH:
      return [oldPos[0], oldPos[1] - SPRITE_SIZE];
    case DIRECTION.SOUTH:
      return [oldPos[0], oldPos[1] + SPRITE_SIZE];
    default:
      return [oldPos[0], oldPos[1]];
  }
};

export const attemptMove = direction => {
  const oldPos = store.getState().player.position;
  const newPos = getNewPosition(oldPos, direction);

  if (observeBoundaries(newPos) && observeImpassable(newPos)) {
    directionMove(direction, newPos);
  }
};

const observeBoundaries = newPos => {
  const mapWidth = store.getState().map.size.width * SPRITE_SIZE;
  const mapHeight = store.getState().map.size.height * SPRITE_SIZE;

  return (
    newPos[0] >= 0 &&
    newPos[0] <= mapWidth - SPRITE_SIZE &&
    (newPos[1] >= 0 && newPos[1] <= mapHeight - SPRITE_SIZE)
  );
};

const observeImpassable = newPos => {
  const tiles = store.getState().map.tiles;
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = tiles[y][x];
  return nextTile < 6;
};

const getSpriteLocation = (direction, walkIndex) => {
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

const getWalkIndex = () => {
  const walkIndex = store.getState().player.walkIndex;

  return walkIndex >= 2 ? 0 : walkIndex + 1;
};

export const generateCharacter = character => {
  const characterList = Array.from(getCharacterList());

  characterList.push(character);

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
