import React from "react";
import "./ControlPanel.css";
import MainControls from "./MainControls";
import VariablePanel from "./VariablePanel/VariablePanel";
import { generateStockMonsterList } from "./actions";

export function ControlPanel() {
  generateStockMonsterList();

  return (
    <div className="ControlPanel">
      <MainControls />
      <VariablePanel />
    </div>
  );
}

export default ControlPanel;
