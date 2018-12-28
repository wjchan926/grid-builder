import { connect } from "react-redux";
import EditPieces from "./EditPieces";
import {
  getCharacterList,
  getCurrentCharacter
} from "../../../Player/reselect";
import { setCurrentCharacter, deleteCharacter } from "../../../Player/actions";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  currentCharacter: getCurrentCharacter(state)
});

const mapDispatchToProps = () => ({
  setCurrentCharacter,
  deleteCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPieces);
