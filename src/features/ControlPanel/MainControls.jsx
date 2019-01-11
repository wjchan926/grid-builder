import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "semantic-ui-react";
import store from "../../config/store";

import "./ControlPanel.css";

import { CONTROL_TYPE } from "../../config/constants";
import {
  setControlType,
  setSelectedTerrainTile,
  setGameState
} from "./actions";
import {
  setCurrentCharacter,
  setCurrentMonster,
  setSelectedPlayer,
  setSelectedMonster
} from "../Player/actions";

let gameFileReader;

export class MainControls extends Component {
  handleEditMapOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = this.props;

    setControlType(CONTROL_TYPE.MAP);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  handleEditCharOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = this.props;

    setControlType(CONTROL_TYPE.CHARACTERS);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  handlePlayGameOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = this.props;

    setControlType(CONTROL_TYPE.PLAY);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  handleGameSave = () => {
    const gameState = store.getState();

    let element = document.createElement("a");
    let file = new Blob([JSON.stringify(gameState)], {
      type: "application/json"
    });
    element.href = URL.createObjectURL(file);
    element.download = "game.json";
    element.click();
  };

  handleGameLoad = () => {
    document.getElementById("selectedGameFile").click();
  };

  handleLoadChange = file => {
    gameFileReader = new FileReader();
    gameFileReader.onloadend = this.handleFileRead;
    gameFileReader.readAsText(file);
  };

  handleFileRead = e => {
    const { setGameState } = this.props;
    const gameState = gameFileReader.result;
    setGameState(gameState);
  };

  render() {
    return (
      <div className="MainControl">
        <div style={{ textAlign: "center" }}>Main Controls</div>
        <div style={{ display: "block", textAlign: "center" }}>
          <Button.Group vertical>
            <Button
              content="Edit Map"
              id="MainControlButton"
              onClick={this.handleEditMapOnClick}
            />
            <Button
              content="Edit Pieces"
              id="MainControlButton"
              onClick={this.handleEditCharOnClick}
            />
          </Button.Group>
          <Button.Group vertical>
            <Button
              content="Save"
              id="MainControlButton"
              onClick={this.handleGameSave}
            />
            <Input
              type="file"
              id="selectedGameFile"
              style={{ display: "none" }}
              onChange={e => this.handleLoadChange(e.target.files[0])}
            />
            <Input
              type="button"
              id="MainControlButton"
              value="Load"
              onClick={this.handleGameLoad}
              className="Import"
            />
            {/* <Button content="Load" id="MainControlButton" onClick={() => {}} /> */}
          </Button.Group>
        </div>
        <Button
          content="Play Game"
          id="MainControlPlay"
          onClick={this.handlePlayGameOnClick}
        />
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  setControlType,
  setCurrentCharacter,
  setSelectedTerrainTile,
  setSelectedPlayer,
  setCurrentMonster,
  setSelectedMonster,
  setGameState
});

export default connect(
  null,
  mapDispatchToProps
)(MainControls);
