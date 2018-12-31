import { connect } from "react-redux";
import World from "./World";
import {
  getCharacterList,
  getMonsterList
} from "../Player/reselect";

const mapStateToProps = state => ({
  characterList: getCharacterList(state),
  monsterList: getMonsterList(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
