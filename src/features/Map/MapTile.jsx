import React from "react";
import { SPRITE_SIZE } from "../../config/constants";
import { getTileSprite } from "../../utils/helpers";

import "./Map.css";

export function MapTile(props) {
  const { tile, onClick } = props;

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

export default MapTile;
