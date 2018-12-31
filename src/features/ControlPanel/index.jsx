import React, { Component } from "react";
import "./ControlPanel.css";
import MainControls from "./MainControls";
import VariablePanel from "./VariablePanel/VariablePanel";
import {generateStockMonsterList} from "./actions";

export class ControlPanel extends Component {
  componentDidMount() {
    generateStockMonsterList();
  }

  render() {
    return (
      <div className="ControlPanel">
        <MainControls />
        <VariablePanel />
      </div>
    );
  }
}

export default ControlPanel;
