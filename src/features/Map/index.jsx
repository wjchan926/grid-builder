import { connect } from "react-redux";
import Map from "./Map";
import { getTiles } from "./reselect";
import { getControlType, getSelectedTerrain } from "../ControlPanel/reselect";
import { setTile } from "../ControlPanel/actions";
import { addTiles } from "./actions";
import { getCurrentCharacter, getCurrentMonster } from "../Player/reselect";
import { setPlayerLocation, setMonsterLocation } from "../Player/actions";

const mapStateToProps = state => ({
  tiles: getTiles(state),
  controlType: getControlType(state),
  selectedTerrain: getSelectedTerrain(state),
  currentCharacter: getCurrentCharacter(state),
  currentMonster: getCurrentMonster(state)
});

const mapDispatchToProps = () => ({
  setTile,
  addTiles,
  setPlayerLocation,
  setMonsterLocation
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
