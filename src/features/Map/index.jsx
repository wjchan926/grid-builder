import React, { Component } from "react";
import { connect } from "react-redux";
import { SPRITE_SIZE } from "../../config/constants";

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

const MapTile = props => {
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{
        width: SPRITE_SIZE,
        height: SPRITE_SIZE
      }}
    />
  );
};

const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 4:
      return "chest";
    case 5:
      return "rock";
    case 6:
      return "tree";
    default:
      return "grass";
  }
};

const mapStateToProps = state => ({
  tiles: state.map.tiles
});

export default connect(
  mapStateToProps,
  null
)(Map);
