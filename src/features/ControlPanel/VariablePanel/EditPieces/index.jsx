import { connect } from "react-redux";
import EditPieces from "./EditPieces";
import {
  getCharacterList,
  getCurrentCharacter,
  getStockMonsterList,
  getMonsterList,
  getCurrentMonster
} from "../../../Player/reselect";
import {
  setCurrentCharacter,
  deleteCharacter,
  setSelectedPlayer,
  setSelectedMonster,
  setCurrentMonster,
  deleteMonster,
  generateCharacter
} from "../../../Player/actions";
import { getControlType } from "../../../ControlPanel/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  currentCharacter: getCurrentCharacter(state),
  stockMonsterList: getStockMonsterList(state),
  monsterList: getMonsterList(state),
  controlType: getControlType(state),
  currentMonster: getCurrentMonster(state)
});

const mapDispatchToProps = () => ({
  setCurrentCharacter,
  deleteCharacter,
  setSelectedPlayer,
  setSelectedMonster,
  setCurrentMonster,
  deleteMonster,
  generateCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPieces);
