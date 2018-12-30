import { DIRECTION, CONTROL_TYPE } from "../../config/constants";
import { attemptMove } from "./actions";
import { getControlType } from "../ControlPanel/reselect";
import { getSelectedPlayer } from "../Player/reselect";

const preventedKeys = [37, 38, 39, 40];

const handleMovement = player => {
  const handleKeyDown = e => {
    if (
      getControlType() === CONTROL_TYPE.PLAY &&
      JSON.stringify(getSelectedPlayer()) !== JSON.stringify({})
    ) {
      if (preventedKeys.includes(e.keyCode)) {
        e.preventDefault();
      }

      switch (e.keyCode) {
        case 37:
          return attemptMove(DIRECTION.WEST);
        case 38:
          return attemptMove(DIRECTION.NORTH);
        case 39:
          return attemptMove(DIRECTION.EAST);
        case 40:
          return attemptMove(DIRECTION.SOUTH);
        default:
          return null;
      }
    }
  };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
};

export default handleMovement;
