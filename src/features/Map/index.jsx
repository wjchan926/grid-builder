import { connect } from "react-redux";
import Map from "./Map";

const mapStateToProps = state => ({
  tiles: state.map.tiles
});

export default connect(
  mapStateToProps,
  null
)(Map);
