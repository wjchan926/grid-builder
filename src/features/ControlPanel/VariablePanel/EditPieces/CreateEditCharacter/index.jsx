import { connect } from "react-redux";
import CreateEditChracter from "./CreateEditChracter";
import { generateCharacter } from "../../../../Player/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({
  generateCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEditChracter);
