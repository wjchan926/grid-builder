import { connect } from "react-redux";
import Player from "./Player";
import handleMovement from "./movement";

const mapStateToProps = state => ({
  ...state.player
});

export default connect(
  mapStateToProps,
  null
)(handleMovement(Player));
