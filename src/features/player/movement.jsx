import {DIRECTION} from "../../config/constants";
import {directionMove} from "./actions";

const handleMovement = player => {
  const handleKeyDown = e => {
    e.preventDefault();

    switch (e.keyCode) {
      case 37:
        return directionMove(DIRECTION.WEST);
      case 38:
        return directionMove(DIRECTION.NORTH);
      case 39:
        return directionMove(DIRECTION.EAST);
      case 40:
        return directionMove(DIRECTION.SOUTH);
        default:
        return null;
    }
  };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
};

export default handleMovement;
