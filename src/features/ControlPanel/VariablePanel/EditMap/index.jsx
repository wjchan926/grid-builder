import { EditMap } from "./EditMap";
import { connect } from "react-redux";
import {
  setMapSize,
  setMap,
  setSelectedTerrainTile,
  setDefaultTerrain
} from "../../actions";
import { getTiles } from "../../../Map/reselect";
import { resetPieces } from "../../../Player/actions";
import { getSelectedTerrain, getDefaultTerrain } from "../../reselect";

const mapStateToProps = state => ({
  tiles: getTiles(state),
  currentTerrain: getSelectedTerrain(state),
  defaultTerrain: getDefaultTerrain(state)
});

const mapDispatchToProps = () => ({
  setMapSize,
  setMap,
  resetPieces,
  setSelectedTerrainTile,
  setDefaultTerrain
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMap);
