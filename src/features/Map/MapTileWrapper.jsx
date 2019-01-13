import React, { Component } from "react";
import { CONTROL_TYPE } from "../../config/constants";
import "./Map.css";

export class MapTileWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false,
      dragging: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.dragging !== state.dragging) {
      return { dragging: props.dragging };
    }
    return null;
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
        if (selectedTerrain !== null) {
          setTile(rowIndex, columnIndex, selectedTerrain);
        }
        break;
      case CONTROL_TYPE.CHARACTERS:
        if (JSON.stringify(currentCharacter) !== "{}") {
          setPlayerLocation(rowIndex, columnIndex);
        }
        if (JSON.stringify(currentMonster) !== "{}") {
          setMonsterLocation(rowIndex, columnIndex);
        }
        break;
      default:
        break;
    }
  };

  handleOver = e => {
    const { dragging } = this.state;

    const {
      controlType,
      selectedTerrain,
      currentCharacter,
      currentMonster
    } = this.props;

    if (dragging) {
      this.handleOnClick(e);
    } else {
      const handleOverPlayer =
        (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "") ||
        (controlType === CONTROL_TYPE.CHARACTERS &&
          JSON.stringify(currentCharacter) !== "{}");

      const handleOverMonster =
        (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "") ||
        (controlType === CONTROL_TYPE.CHARACTERS &&
          JSON.stringify(currentMonster) !== "{}");

      if (handleOverPlayer || handleOverMonster) {
        this.setState({ on: true });
      }
    }
  };

  handleLeave = () => {
    this.setState({ on: false });
  };

  render() {
    const { mapTile, selectedTerrain, currentCharacter, currentMonster } = this.props;
    const { on } = this.state;
   
    return (
      <div
        onClick={(selectedTerrain || currentCharacter || currentMonster) !== "" ? this.handleOnClick : null}
        onDragStart={e => {
          e.preventDefault();
        }}
        className={`MapTileWrapper ${on ? `MapTileWrapperHover` : ""}`}
        onMouseOver={(selectedTerrain || currentCharacter || currentMonster) !== "" ? this.handleOver : null}
        onMouseLeave={(selectedTerrain || currentCharacter || currentMonster) !== "" ? this.handleLeave : null}
      >
        {mapTile}
      </div>
    );
  }
}

export default MapTileWrapper;
