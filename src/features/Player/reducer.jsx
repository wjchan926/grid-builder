import {
  GENERATE_CHARACTER,
  SET_CURRENT_CHARACTER,
  SET_CURRENT_CHARACTER_LOCATION,
  SET_SELECTED_PLAYER,
  SET_SELECTED_PLAYER_STAT,
  SET_CURRENT_MONSTER,
  GENERATE_MONSTER,
  SET_SELECTED_MONSTER,
  SET_SELECTED_MONSTER_STAT
} from "./actions";
import { GENERATE_STOCK_MONSTER_LIST } from "../ControlPanel/actions";

const initialState = {
  characterList: [],
  currentCharacter: {},
  selectedPlayer: {},
  stockMonsterList: [],
  currentMonster: {},
  monsterList: [],
  selectedMonster: {}
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
    case GENERATE_STOCK_MONSTER_LIST:
      return {
        ...state,
        stockMonsterList: action.payload
      };
    case SET_CURRENT_MONSTER:
      return {
        ...state,
        currentMonster: action.payload
      };
    case GENERATE_MONSTER:
      return {
        ...state,
        monsterList: action.payload
      };
    case SET_SELECTED_MONSTER:
      return {
        ...state,
        selectedMonster: Object.assign({}, action.payload)
      };
    case SET_SELECTED_MONSTER_STAT:
      return {
        ...state,
        selectedMonster: Object.assign({}, action.payload)
      };
    default:
      return state;
  }
};

export default playerReducer;
