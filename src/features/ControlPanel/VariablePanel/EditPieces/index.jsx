import { connect } from "react-redux";
import EditPieces from "./EditPieces";
import { getCharacterList, getCurrentCharacter } from "../../../Player/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  currentCharacter: getCurrentCharacter(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPieces);
