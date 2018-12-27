import React, { Component } from "react";
import MapTile from "./MapTile";

import "./Map.css";

export default class Map extends Component {
  render() {
    const { tiles } = this.props;

    return (
      <div className="Map">
        {tiles.map((row, i) => (
          <MapRow row={row} key={i} />
        ))}
      </div>
    );
  }
}

const MapRow = props => {
  const { row } = props;

  return (
    <div className="row">
      {row.map((tile, i) => (
        <MapTile tile={tile} key={i} />
      ))}
    </div>
  );
};