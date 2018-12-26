import { MOVE_PLAYER } from "./actions";
import { DIRECTION, SPRITE_SIZE } from "../../config/constants";

const initialState = {
  position: [0, 0],
  spriteLocation: `${SPRITE_SIZE * 0}px ${SPRITE_SIZE * 0}px`,
  direction: DIRECTION.SOUTH,
  walkIndex: 0
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_PLAYER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
