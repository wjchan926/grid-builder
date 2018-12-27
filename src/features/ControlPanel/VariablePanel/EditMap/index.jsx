import { EditMap } from "./EditMap";
import { connect } from "react-redux";
import { setMapSize } from "../../actions";

const mapDispatchToProps = () => ({
  setMapSize
});

export default connect(
  null,
  mapDispatchToProps
)(EditMap);
