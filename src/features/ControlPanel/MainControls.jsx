import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import "./ControlPanel.css";

import { CONTROL_TYPE } from "../../config/constants";
import { setControlType } from "./actions";

export class MainControls extends Component {
  handleEditMapOnClick = () => {
    const { setControlType } = this.props;

    setControlType(CONTROL_TYPE.MAP);
  };

  handleEditCharOnClick = () => {
    const { setControlType } = this.props;

    setControlType(CONTROL_TYPE.CHARACTERS);
  };

  handlePlayGameOnClick = () => {
    const { setControlType } = this.props;

    setControlType(CONTROL_TYPE.PLAY);
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>Main Controls</div>
        <div>
          <Button.Group vertical>
            <Button
              content="Edit Map"
              id="MainControl"
              onClick={this.handleEditMapOnClick}
            />
            <Button
              content="Edit Pieces"
              id="MainControl"
              onClick={this.handleEditCharOnClick}
            />
          </Button.Group>        
          <Button.Group vertical>
            <Button content="Save" id="MainControl" onClick={() => {}} />
            <Button content="Load" id="MainControl" onClick={() => {}} />
          </Button.Group>
          <Button
            content="Play Game"
            id="MainControlPlay"
            onClick={this.handlePlayGameOnClick}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  setControlType
});

export default connect(
  null,
  mapDispatchToProps
)(MainControls);
