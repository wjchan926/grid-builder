import {
  DIRECTION,
  SPRITE_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT
} from "../../config/constants";
import store from "../../config/store";

export const MOVE_PLAYER = "MOVE_PLAYER";

export const directionMove = direction => {
  const oldPos = store.getState().player.position;
  store.dispatch({
    type: MOVE_PLAYER,
    payload: { position: observeBoundaries(oldPos, getNewPosition(direction)) }
  });
};

const getNewPosition = direction => {
  const oldPos = store.getState().player.position;
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

const observeBoundaries = (oldPos, newPos) => {
  return newPos[0] >= 0 &&
    newPos[0] <= MAP_WIDTH - SPRITE_SIZE &&
    (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
    ? newPos
    : oldPos;
};
