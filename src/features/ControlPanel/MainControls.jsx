import React from "react";
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

export function MainControls(props) {
  const handleEditMapOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = props;

    setControlType(CONTROL_TYPE.MAP);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  const handleEditCharOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = props;

    setControlType(CONTROL_TYPE.CHARACTERS);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  const handlePlayGameOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter,
      setSelectedPlayer,
      setCurrentMonster,
      setSelectedMonster
    } = props;

    setControlType(CONTROL_TYPE.PLAY);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
    setSelectedPlayer({});
    setCurrentMonster({});
    setSelectedMonster({});
  };

  const handleGameSave = () => {
    const gameState = store.getState();

    let element = document.createElement("a");
    let file = new Blob([JSON.stringify(gameState)], {
      type: "application/json"
    });
    element.href = URL.createObjectURL(file);
    element.download = "game.json";
    element.click();
  };

  const handleGameLoad = () => {
    document.getElementById("selectedGameFile").click();
  };

  const handleLoadChange = file => {
    gameFileReader = new FileReader();
    gameFileReader.onloadend = handleFileRead;
    gameFileReader.readAsText(file);
  };

  const handleFileRead = e => {
    const { setGameState } = props;
    const gameState = gameFileReader.result;
    setGameState(gameState);
  };

  return (
    <div className="MainControl">
      <div>Main Controls</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button.Group vertical>
          <Button
            content="Edit Map"
            id="MainControlButton"
            onClick={handleEditMapOnClick}
          />
          <Button
            content="Edit Pieces"
            id="MainControlButton"
            onClick={handleEditCharOnClick}
          />
          <Button
            content="Play"
            id="MainControlPlay"
            onClick={handlePlayGameOnClick}
          />
        </Button.Group>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maringRight: "auto"
          }}
        >
          <Button
            content="Save"
            id="MainControlButton"
            onClick={handleGameSave}
          />
          <Input
            type="file"
            id="selectedGameFile"
            style={{ display: "none" }}
            onChange={e => handleLoadChange(e.target.files[0])}
          />
          <Input
            type="button"
            id="MainControlButton"
            value="Load"
            onClick={handleGameLoad}
            className="Import"
          />
        </div>
      </div>
    </div>
  );
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
