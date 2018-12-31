import MonsterInfoPanel from "./MonsterInfoPanel";
import { connect } from "react-redux";
import { getSelectedMonster } from "../../../../Player/reselect";
import { setMonsterStatValue } from "../../../../Player/actions";

const mapStateToProps = state => ({
  selectedMonster: getSelectedMonster(state)
});

const mapDispatchToProps = () => ({
  setMonsterStatValue
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterInfoPanel);
