import { DIRECTION, CONTROL_TYPE } from "../../../config/constants";
import { attemptMonsterMove } from "../actions";
import { getControlType } from "../../ControlPanel/reselect";
import { getSelectedMonster } from "../../Player/reselect";

const preventedKeys = [37, 38, 39, 40];

const handleMovement = monster => {
  const handleKeyDown = e => {
    if (
      getControlType() === CONTROL_TYPE.PLAY &&
      JSON.stringify(getSelectedMonster()) !== JSON.stringify({})
    ) {
      if (preventedKeys.includes(e.keyCode)) {
        e.preventDefault();
      }

      switch (e.keyCode) {
        case 37:
          return attemptMonsterMove(DIRECTION.WEST);
        case 38:
          return attemptMonsterMove(DIRECTION.NORTH);
        case 39:
          return attemptMonsterMove(DIRECTION.EAST);
        case 40:
          return attemptMonsterMove(DIRECTION.SOUTH);
        default:
          return null;
      }
    }
  };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return monster;
};

export default handleMovement;
