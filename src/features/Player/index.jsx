import { connect } from "react-redux";
import Player from "./Player";
import handleMovement from "./movement";
import { getControlType } from "../ControlPanel/reselect";
import { getSelectedPlayer } from "./reselect";
import { setSelectedPlayer } from "./actions";

const mapStateToProps = state => ({
  controlType: getControlType(state),
  selectedPlayer: getSelectedPlayer(state)
});

const mapDispatchToProps = () => ({
  setSelectedPlayer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(handleMovement(Player));
