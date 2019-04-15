import React, { Component } from "react";
import MapRow from "./MapRow";

import "./Map.css";
import { CONTROL_TYPE } from "../../config/constants";

export default class Map extends Component {
  state = {
    dragging: false
  };

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
      currentMonster,
      tiles
    } = this.props;
    const { dragging } = this.state;

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
