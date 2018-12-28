import React, { Component } from "react";

import "./Player.css";
import { SPRITE_SIZE, CONTROL_TYPE } from "../../config/constants";

export default class Player extends Component {
  render() {
    const { position, spriteLocation, controlType } = this.props;

    return (
        <div
          style={{
            top: position[1],
            left: position[0],
            backgroundPosition: spriteLocation,
            pointerEvents: `${controlType === CONTROL_TYPE.PLAY ? "" : "none"}`
          }}
          className="Player"
        />
    );
  }
}
