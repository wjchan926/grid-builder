import { connect } from "react-redux";
import World from "./World";

const mapStateToProps = state => ({
  // selectedCharacter: getSelectedCharacter(state)
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
