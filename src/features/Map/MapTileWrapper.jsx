import React, { Component } from "react";
import { CONTROL_TYPE } from "../../config/constants";
import "./Map.css";

export class MapTileWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };
  }
  handleOnClick = e => {
    const {
      rowIndex,
      columnIndex,
      controlType,
      selectedTerrain,
      setTile,
      currentCharacter,
      setPlayerLocation,
      setMonsterLocation,
      currentMonster
    } = this.props;

    e.stopPropagation();

    switch (controlType) {
      case CONTROL_TYPE.MAP:
        if (selectedTerrain !== "none") {
          setTile(rowIndex, columnIndex, selectedTerrain);
        }
        break;
      case CONTROL_TYPE.CHARACTERS:
        if (JSON.stringify(currentCharacter) !== JSON.stringify({})) {
          setPlayerLocation(rowIndex, columnIndex);
        }
        if (JSON.stringify(currentMonster) !== JSON.stringify({})) {
          setMonsterLocation(rowIndex, columnIndex);
        }
        break;
      default:
        break;
    }
  };

  handleOver = () => {
    const { controlType, selectedTerrain, currentCharacter, currentMonster } = this.props;

    const handleOverPlayer =
      (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "none") ||
      (controlType === CONTROL_TYPE.CHARACTERS &&
        JSON.stringify(currentCharacter) !== JSON.stringify({}));

    const handleOverMonster =
      (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "none") ||
      (controlType === CONTROL_TYPE.CHARACTERS &&
        JSON.stringify(currentMonster) !== JSON.stringify({}));

    if (handleOverPlayer || handleOverMonster) {
      this.setState({ on: true });
    }
  };

  handleLeave = () => {
    this.setState({ on: false });
  };

  render() {
    const { mapTile } = this.props;
    const { on } = this.state;

    return (
      <div
        onClick={this.handleOnClick}
        className={`MapTileWrapper ${on ? `MapTileWrapperHover` : ""}`}
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        {mapTile}
      </div>
    );
  }
}

export default MapTileWrapper;
