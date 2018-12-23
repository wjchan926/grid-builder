import { CONTROL_TYPE } from "../../config/constants";
import {SET_CONTROL_TYPE} from "./actions";

const initialState = {
  controlType: CONTROL_TYPE.PLAY
};

const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTROL_TYPE:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default controlsReducer;
