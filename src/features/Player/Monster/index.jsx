import { connect } from "react-redux";
import Monster from "./Monster";
// import handleMovement from "./movement";
import { getControlType } from "../../ControlPanel/reselect";
import { getSelectedMonster, getCurrentMonster } from "../reselect";
import { setSelectedMonster, setSelectedPlayer, setCurrentCharacter,setCurrentMonster } from "../actions";

const mapStateToProps = state => ({
  controlType: getControlType(state),
  selectedMonster: getSelectedMonster(state),
  currentMonster: getCurrentMonster(state)
});

const mapDispatchToProps = () => ({
  setSelectedMonster,
  setSelectedPlayer,
  setCurrentCharacter,
  setCurrentMonster
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
// )(handleMovement(Monster));
)(Monster)
