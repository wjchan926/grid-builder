import React, { Component } from "react";
import { SPRITE_SIZE } from "../../config/constants";

import "./Map.css";

export const getTileSprite = type => {
  switch (type) {
    case 0:
      return "grass";
    case 1:
      return "water";
    case 2:
      return "dirt";
    case 3:
      return "jungle";
    case 4:
      return "chest";
    case 5:
      return "campfire";
    case 6:
      return "rock";
    case 7:
      return "tree";
    case 8:
      return "wall";
    default:
      return "none";
  }
};

export class MapTile extends Component {
  render() {
    const { tile } = this.props;

    return (
      <div
        className={`tile ${getTileSprite(tile)}`}
        style={{
          width: SPRITE_SIZE,
          height: SPRITE_SIZE
        }}
      />
    );
  }
}

export default MapTile;
