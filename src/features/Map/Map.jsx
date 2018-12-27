import React, { Component } from "react";
import MapRow from "./MapRow";
import { tiles } from "../../data/Maps/1";

import "./Map.css";

export default class Map extends Component {
  constructor(props) {
    super(props);

    const { addTiles } = this.props;

    this.state = {
      // Initialize tiles with default map
      tiles: addTiles(tiles)
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

  render() {
    const { controlType, selectedTerrain, setTile } = this.props;
    const { tiles } = this.state;

    return (
      <div className="Map">
        {tiles.map((row, rowIndex) => {
          return (
            <MapRow
              row={row}
              key={rowIndex}
              rowIndex={rowIndex}
              controlType={controlType}
              selectedTerrain={selectedTerrain}
              setTile={setTile}
            />
          );
        })}
      </div>
    );
  }
}
