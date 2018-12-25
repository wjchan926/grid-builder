import React, { Component } from "react";
import "./ControlPanel.css";
import MainControls from "./MainControls";
import VariablePanel from "./VariablePanel/VariablePanel";

export class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel">
        <MainControls />
        <VariablePanel/>
      </div>
    );
  }
}

export default ControlPanel;
