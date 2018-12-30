import Stat from "./Stat"
import { connect } from "react-redux";
import {setStatValue} from "../../../../Player/actions"

const mapStateToProps = state => ({

  });
  
  const mapDispatchToProps = () => ({
    setStatValue
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Stat);
  