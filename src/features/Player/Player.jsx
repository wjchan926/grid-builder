import React, { Component } from "react";

import "./Player.css";

import PlayerSprite from "./PlayerSprite";
import { SPRITE_SIZE } from "../../config/constants";

export class Player extends Component {
  render() {
    const {
      position,
      spriteLocation,
      controlType,
      character,
      positioning = "absolute"
    } = this.props;

    return (
      <div
        style={{
          top: position[1] * SPRITE_SIZE,
          left: position[0] * SPRITE_SIZE,
          position: positioning
        }}
      >
        <PlayerSprite
          character={character}
          spriteLocation={spriteLocation}
          controlType={controlType}
          positioning={positioning}
        />
      </div>
    );
  }
}

export default Player;
