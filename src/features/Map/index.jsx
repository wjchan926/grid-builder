import React, { Component } from "react";
import { connect } from "react-redux";
import MapTile from "./MapTile";

import "./Map.css";

export class Map extends Component {
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

const mapStateToProps = state => ({
  tiles: state.map.tiles
});

export default connect(
  mapStateToProps,
  null
)(Map);
