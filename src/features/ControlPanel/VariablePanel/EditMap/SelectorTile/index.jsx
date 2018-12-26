import { SelectorTile } from "./SelectorTile";
import { connect } from "react-redux";
import { setSelectedTerrainTile } from "../actions";

// const mapStateToProps = state => ({});

const mapDispatchToProps = () => ({
  setSelectedTerrainTile
});

export default connect(
  null,
  mapDispatchToProps
)(SelectorTile);
