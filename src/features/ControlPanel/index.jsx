import React, { Component } from "react";
import "./ControlPanel.css";
import MainControls from "./MainControls";
import VariablePanel from "./VariablePanel";

export class ControlPanel extends Component {
  render() {
    return (
      <div className="ControlPanel">
        <MainControls />
        <hr/>
        <VariablePanel/>
      </div>
    );
  }
}

export default ControlPanel;
