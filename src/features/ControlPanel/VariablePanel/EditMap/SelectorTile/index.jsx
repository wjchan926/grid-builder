import { SelectorTile } from "./SelectorTile";
import { connect } from "react-redux";
import { setSelectedTerrainTile } from "../../../actions";
import { getSelectedTerrain } from "../../../reselect";

const mapStateToProps = state => ({
  currentTerrain: getSelectedTerrain(state)
});

const mapDispatchToProps = () => ({
  setSelectedTerrainTile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectorTile);
