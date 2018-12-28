import { connect } from "react-redux";
import EditPieces from "./EditPieces";
import { getCharacterList } from "../../../Player/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPieces);
