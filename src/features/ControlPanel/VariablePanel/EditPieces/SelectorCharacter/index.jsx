import {SelectorCharacter} from "./SelectorCharacter";
import { connect } from "react-redux";
import { getCurrentCharacter } from "../../../../Player/reselect";
import { setCurrentCharacter } from "../../../../Player/actions";

const mapStateToProps = state => ({
  currentCharacter: getCurrentCharacter(state)
});

const mapDispatchToProps = () => ({
  setCurrentCharacter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectorCharacter);
