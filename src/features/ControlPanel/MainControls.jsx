import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import "./ControlPanel.css";

export class MainControls extends Component {
  render() {
    return (
      <div>
        <div>Main Controls</div>
        <Button content="Edit Map" id="MainControl"/>
        <Button content="Edit Characters" id="MainControl"/>
        <Button content="Play Game" id="MainControl"/>
      </div>
    );
  }
}

export default MainControls;
