import store from "../../config/store";

export const SET_CONTROL_TYPE = "SET_CONTROL_TYPE";

export const setControlType = controlType => {
  store.dispatch({
    type: SET_CONTROL_TYPE,
    payload: {controlType}
  });
};
