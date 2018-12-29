import {
  GENERATE_CHARACTER,
  SET_CURRENT_CHARACTER,
  SET_CURRENT_CHARACTER_LOCATION,
  SET_SELECTED_PLAYER,
} from "./actions";

const initialState = {
  characterList: [],
  currentCharacter: {},
  selectedPlayer: {}
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case SET_CURRENT_CHARACTER_LOCATION:
      return {
        ...state,
        currentCharacter: action.payload
      };
    default:
      return state;
    case SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: action.payload
      };
  }
};

export default playerReducer;
