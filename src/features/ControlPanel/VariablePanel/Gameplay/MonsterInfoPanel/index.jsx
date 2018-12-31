import MonsterInfoPanel from "./MonsterInfoPanel";
import { connect } from "react-redux";
import { getSelectedMonster } from "../../../../Player/reselect";
import { setStatValue } from "../../../../Player/actions";

const mapStateToProps = state => ({
  selectedMonster: getSelectedMonster(state)
});

const mapDispatchToProps = () => ({
  setStatValue
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonsterInfoPanel);
