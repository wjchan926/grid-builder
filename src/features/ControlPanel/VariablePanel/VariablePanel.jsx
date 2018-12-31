import React, { Component } from "react";
import { connect } from "react-redux";

import "./VariablePanel.css";

import { CONTROL_TYPE } from "../../../config/constants";
import EditMap from "./EditMap";
import EditPieces from "./EditPieces/";
import Gameplay from "./Gameplay/Gameplay";
import { getControlType } from "../reselect";

export class VariablePanel extends Component {
  render() {
    const { controlType } = this.props;
    let variableControls;

    switch (controlType) {
      case CONTROL_TYPE.MAP:
        variableControls = <EditMap />;
        break;
      case CONTROL_TYPE.CHARACTERS:
        variableControls = <EditPieces />;
        break;
      case CONTROL_TYPE.PLAY:
      default:
        variableControls = <Gameplay />;
        break;
    }

    return <div className="VariablePanel">{variableControls}</div>;
  }
}

const mapStateToProps = state => ({
  controlType: getControlType(state)
});

export default connect(mapStateToProps)(VariablePanel);
