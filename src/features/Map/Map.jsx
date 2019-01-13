import React, { Component } from "react";
import MapRow from "./MapRow";
import { tiles } from "../../data/Maps/1";

import "./Map.css";
import { CONTROL_TYPE } from "../../config/constants";

export default class Map extends Component {
  constructor(props) {
    super(props);

    const { addTiles } = this.props;

    this.state = {
      // Initialize tiles with default map
      tiles: addTiles(tiles),
      dragging: false
    };
  }

  componentDidMount() {
    const { tiles } = this.props;
    this.setState({ tiles: tiles });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.tiles !== state.tiles) {
      return { tiles: props.tiles };
    }
    return null;
  }

  handleMouseDown = e => {
    const { controlType } = this.props;
    if (controlType === CONTROL_TYPE.MAP) {
      this.setState({ dragging: true });
    }
  };

  handleMouseUp = e => {
    const { controlType } = this.props;
    if (controlType === CONTROL_TYPE.MAP) {
      this.setState({ dragging: false });
    }
  };

  render() {
    const {
      controlType,
      selectedTerrain,
      setTile,
      currentCharacter,
      setPlayerLocation,
      setMonsterLocation,
      currentMonster
    } = this.props;
    const { tiles, dragging } = this.state;

    return (
      <div
        className="Map"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        {tiles.map((row, rowIndex) => {
          return (
            <MapRow
              row={row}
              key={rowIndex}
              rowIndex={rowIndex}
              controlType={controlType}
              selectedTerrain={selectedTerrain}
              setTile={setTile}
              currentCharacter={currentCharacter}
              setPlayerLocation={setPlayerLocation}
              setMonsterLocation={setMonsterLocation}
              currentMonster={currentMonster}
              dragging={dragging}
            />
          );
        })}
      </div>
    );
  }
}
