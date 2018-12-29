import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import "./ControlPanel.css";

import { CONTROL_TYPE } from "../../config/constants";
import { setControlType, setSelectedTerrainTile } from "./actions";
import { setCurrentCharacter } from "../Player/actions";

export class MainControls extends Component {
  handleEditMapOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter
    } = this.props;

    setControlType(CONTROL_TYPE.MAP);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
  };

  handleEditCharOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter
    } = this.props;

    setControlType(CONTROL_TYPE.CHARACTERS);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
  };

  handlePlayGameOnClick = () => {
    const {
      setControlType,
      setSelectedTerrainTile,
      setCurrentCharacter
    } = this.props;

    setControlType(CONTROL_TYPE.PLAY);
    setSelectedTerrainTile(null);
    setCurrentCharacter({});
  };

  render() {
    return (
      <div className="MainControl">
          <div style={{ textAlign: "center" }}>Main Controls</div>
          <div style={{display:"block", textAlign:"center"}}>
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
                onClick={() => {}}
              />
              <Button
                content="Load"
                id="MainControlButton"
                onClick={() => {}}
              />
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
  setSelectedTerrainTile
});

export default connect(
  null,
  mapDispatchToProps
)(MainControls);
