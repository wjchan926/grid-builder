import React, { Component } from "react";

import "./Player.css";

import PlayerSprite from "./PlayerSprite";

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
          top: position[1],
          left: position[0],
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
