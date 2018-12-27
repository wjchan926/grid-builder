import { connect } from "react-redux";
import Player from "./Player";
import handleMovement from "./movement";
import { getControlType } from "../ControlPanel/reselect";

const mapStateToProps = state => ({
  ...state.player,
  controlType: getControlType(state)
});

export default connect(
  mapStateToProps,
  null
)(handleMovement(Player));
