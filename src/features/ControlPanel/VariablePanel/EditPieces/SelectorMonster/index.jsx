import { SelectorMonster } from "./SelectorMonster";
import { connect } from "react-redux";
import {
  getCurrentMonster,
  getSelectedMonster
} from "../../../../Player/reselect";
import {
  setCurrentMonster,
  setCurrentCharacter,
  setSelectedMonster,
  setSelectedPlayer
} from "../../../../Player/actions";

const mapStateToProps = state => ({
  currentMonster: getCurrentMonster(state),
  selectedMonster: getSelectedMonster(state),
});

const mapDispatchToProps = () => ({
  setCurrentMonster,
  setCurrentCharacter,
  setSelectedMonster,
  setSelectedPlayer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectorMonster);
