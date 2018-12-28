import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import "./ControlPanel.css";

import { CONTROL_TYPE } from "../../config/constants";
import { setControlType, setSelectedTerrainTile } from "./actions";
import {setCurrentCharacter} from "../Player/actions"

export class MainControls extends Component {
  handleEditMapOnClick = () => {
    const { setControlType, setSelectedTerrainTile, setCurrentCharacter} = this.props;

    setControlType(CONTROL_TYPE.MAP);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
  };

  handleEditCharOnClick = () => {
    const { setControlType, setSelectedTerrainTile, setCurrentCharacter } = this.props;

    setControlType(CONTROL_TYPE.CHARACTERS);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
  };

  handlePlayGameOnClick = () => {
    const { setControlType, setSelectedTerrainTile, setCurrentCharacter } = this.props;

    setControlType(CONTROL_TYPE.PLAY);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
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
  setControlType,
  setCurrentCharacter,
  setSelectedTerrainTile
});

export default connect(
  null,
  mapDispatchToProps
)(MainControls);
