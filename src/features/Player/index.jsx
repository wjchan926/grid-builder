import { connect } from "react-redux";
import Player from "./Player";
import handleMovement from "./movement";
import { getControlType } from "../ControlPanel/reselect";
import { getSelectedPlayer, getCurrentCharacter } from "./reselect";
import { setSelectedPlayer, setCurrentCharacter, setCurrentMonster,setSelectedMonster } from "./actions";

const mapStateToProps = state => ({
  controlType: getControlType(state),
  selectedPlayer: getSelectedPlayer(state),
  currentPlayer: getCurrentCharacter(state)
});

const mapDispatchToProps = () => ({
  setSelectedPlayer,
  setCurrentCharacter,
  setCurrentMonster,
  setSelectedMonster
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(handleMovement(Player));
