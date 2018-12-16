import { DIRECTION } from "../../config/constants";
import { attemptMove } from "./actions";

const handleMovement = player => {
  const handleKeyDown = e => {
    e.preventDefault();

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
  };

  window.addEventListener("keydown", e => {
    handleKeyDown(e);
  });

  return player;
};

export default handleMovement;
