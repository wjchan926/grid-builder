import { DIRECTION, SPIRTE_SIZE } from "../../config/constants";
import store from "../../config/store"

export const MOVE_PLAYER = "MOVE_PLAYER";

export const directionMove = direction => {
  store.dispatch({
    type: MOVE_PLAYER,
    payload: { position: getNewPosition(direction) }
  });
};

const getNewPosition = direction => {
  const oldPos = store.getState().player.position;

  switch (direction) {
    case DIRECTION.WEST:
      return [oldPos[0] - SPIRTE_SIZE, oldPos[1]];
    case DIRECTION.EAST:
      return [oldPos[0] + SPIRTE_SIZE, oldPos[1]];
    case DIRECTION.NORTH:
      return [oldPos[0], oldPos[1] - SPIRTE_SIZE];
    case DIRECTION.SOUTH:
      return [oldPos[0], oldPos[1] + SPIRTE_SIZE];
    default:
      return [oldPos[0], oldPos[1]];
  }
};
