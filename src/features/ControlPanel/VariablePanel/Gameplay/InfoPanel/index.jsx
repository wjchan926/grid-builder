import InfoPanel from "./InfoPanel"
import { connect } from "react-redux";
import {getSelectedPlayer} from "../../../../Player/reselect"
import {setStatValue} from "../../../../Player/actions"

const mapStateToProps = state => ({
    selectedPlayer: getSelectedPlayer(state)
  });
  
  const mapDispatchToProps = () => ({
    setStatValue
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(InfoPanel);
  