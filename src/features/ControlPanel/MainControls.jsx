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
        <div>Main Controls</div>
        <Button
          content="Edit Map"
          id="MainControl"
          onClick={this.handleEditMapOnClick}
        />
        <Button
          content="Edit Characters"
          id="MainControl"
          onClick={this.handleEditCharOnClick}
        />
        <Button
          content="Play Game"
          id="MainControl"
          onClick={this.handlePlayGameOnClick}
        />
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
