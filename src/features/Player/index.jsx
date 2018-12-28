import { connect } from "react-redux";
import Player from "./Player";
import handleMovement from "./movement";
import { getControlType } from "../ControlPanel/reselect";
import {getSelectedPlayer} from "./reselect"

const mapStateToProps = state => ({
  controlType: getControlType(state),
  selectedPlayer: getSelectedPlayer(state)
});

export default connect(
  mapStateToProps,
  null
)(handleMovement(Player));
