import React, { Component } from "react";

import "./Player.css";
import { SPRITE_SIZE } from "../../config/constants";

export default class Player extends Component {
  render() {
    const { position, spriteLocation } = this.props;

    return (
      <div
        style={{
          top: position[1],
          left: position[0],
          height: SPRITE_SIZE,
          width: SPRITE_SIZE,
          backgroundPosition: spriteLocation
        }}
        className="Player"
      />
    );
  }
}