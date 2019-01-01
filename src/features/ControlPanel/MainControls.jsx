import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import "./ControlPanel.css";

import { CONTROL_TYPE } from "../../config/constants";
import { setControlType, setSelectedTerrainTile } from "./actions";
import {
  setCurrentCharacter,
  setCurrentMonster,
  setSelectedPlayer,
  setSelectedMonster
} from "../Player/actions";

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
            <Button content="Save" id="MainControlButton" onClick={() => {}} />
            <Button content="Load" id="MainControlButton" onClick={() => {}} />
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
  setSelectedMonster
});

export default connect(
  null,
  mapDispatchToProps
)(MainControls);
