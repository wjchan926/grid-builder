import {ADD_TILES} from "../World/actions"
const initialState = {
  tiles: []
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TILES:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default mapReducer;
