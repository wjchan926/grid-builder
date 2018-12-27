import React, { Component } from "react";
import { SPRITE_SIZE } from "../../config/constants";
import { getTileSprite } from "../../utils/helpers";

import "./Map.css";

export class MapTile extends Component {
  render() {
    const { tile, onClick } = this.props;

    return (
      <div
        className={`tile ${getTileSprite(tile)}`}
        style={{
          width: SPRITE_SIZE,
          height: SPRITE_SIZE
        }}
        onClick={onClick}
      />
    );
  }
}

export default MapTile;
