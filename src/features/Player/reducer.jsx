import {
  GENERATE_CHARACTER,
  SET_CURRENT_CHARACTER,
  SET_CURRENT_CHARACTER_LOCATION,
} from "./actions";

const initialState = {
  characterList: [],
  currentCharacter: {}
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
  }
};

export default playerReducer;
