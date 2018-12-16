import {
  DIRECTION,
  SPRITE_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT
} from "../../config/constants";
import store from "../../config/store";

export const MOVE_PLAYER = "MOVE_PLAYER";

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
  return (
    newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
  );
};

const observeImpassable = newPos => {
  const tiles = store.getState().map.tiles;
  const y = newPos[1] / SPRITE_SIZE;
  const x = newPos[0] / SPRITE_SIZE;
  const nextTile = tiles[y][x];
  return nextTile < 5;
};

const getSpriteLocation = (direction, walkIndex) => {
  switch (direction) {
    case DIRECTION.EAST:
      return `${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 3}px`;
    case DIRECTION.WEST:
      return `${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 2}px`;
    case DIRECTION.NORTH:
      return `${SPRITE_SIZE * walkIndex}px -${SPRITE_SIZE * 1}px`;
    case DIRECTION.SOUTH:
      return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`;
    default:
  }
};

const getWalkIndex = () => {
  const walkIndex = store.getState().player.walkIndex;

  return walkIndex >= 7 ? 0 : walkIndex + 1;
};
