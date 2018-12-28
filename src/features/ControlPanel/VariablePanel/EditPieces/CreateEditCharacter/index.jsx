import { connect } from "react-redux";
import CreateEditChracter from "./CreateEditChracter";
import { generateCharacter } from "../../../../Player/actions";
import { getCurrentCharacter } from "../../../../Player/reselect";

const mapStateToProps = state => ({
  currentCharacter: getCurrentCharacter(state)
});

const mapDispatchToProps = () => ({
  generateCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditChracter);
