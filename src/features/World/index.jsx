import { connect } from "react-redux";
import World from "./World";
import { getCharacterList, getSelectedPlayer } from "../Player/reselect";
import { getControlType } from "../ControlPanel/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  controlType: getControlType(state),
  selectedPlayer: getSelectedPlayer(state)
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
