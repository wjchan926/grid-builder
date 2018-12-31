import { connect } from "react-redux";
import EditPieces from "./EditPieces";
import {
  getCharacterList,
  getCurrentCharacter,
  getStockMonsterList,
  getMonsterList
} from "../../../Player/reselect";
import { setCurrentCharacter, deleteCharacter } from "../../../Player/actions";
import { getControlType } from "../../../ControlPanel/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  currentCharacter: getCurrentCharacter(state),
  stockMonsterList: getStockMonsterList(state),
  monsterList: getMonsterList(state),
  controlType: getControlType(state),
});

const mapDispatchToProps = () => ({
  setCurrentCharacter,
  deleteCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPieces);
