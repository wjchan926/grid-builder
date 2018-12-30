import {
  GENERATE_CHARACTER,
  SET_CURRENT_CHARACTER,
  SET_CURRENT_CHARACTER_LOCATION,
  SET_SELECTED_PLAYER,
  SET_SELECTED_PLAYER_STAT
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
        currentCharacter: Object.assign({}, action.payload)
      };
    case SET_CURRENT_CHARACTER_LOCATION:
      return {
        ...state,
        currentCharacter: Object.assign({}, action.payload)
      };
    case SET_SELECTED_PLAYER_STAT:
      return {
        ...state,
        selectedPlayer: Object.assign({}, action.payload)
      };
    case SET_SELECTED_PLAYER:
      return {
        ...state,
        selectedPlayer: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
};

export default playerReducer;
