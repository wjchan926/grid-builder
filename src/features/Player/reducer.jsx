import { MOVE_PLAYER, GENERATE_CHARACTER, SET_CURRENT_CHARACTER } from "./actions";
import { DIRECTION, SPRITE_SIZE } from "../../config/constants";

const initialState = {
  position: [0, 0],
  spriteLocation: `${SPRITE_SIZE * 0}px ${SPRITE_SIZE * 0}px`,
  direction: DIRECTION.SOUTH,
  walkIndex: 0,
  characterList: [],
  currentCharacter: {}
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_PLAYER:
      return {
        ...state,
        ...action.payload
      };
    case GENERATE_CHARACTER:
      return {
        ...state,
        characterList: action.payload
      };
      case SET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
