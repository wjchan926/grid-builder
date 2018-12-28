import { connect } from "react-redux";
import World from "./World";
import { getCharacterList } from "../Player/reselect";
import { getControlType } from "../ControlPanel/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  controlType: getControlType(state)
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
