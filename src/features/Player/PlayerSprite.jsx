import React, { Component } from "react";

import "./Player.css";
import { CONTROL_TYPE } from "../../config/constants";

export class PlayerSprite extends Component {
  render() {
    const { positioning, character, controlType } = this.props;

    let transform = "";
    let backgroundColor = "";
    if (controlType !== CONTROL_TYPE.EDIT) {
      transform = character.hp === 0 ? "rotate(90deg)" : "";
      backgroundColor =  character.hp === 0 ? "red" : "";
    }

    if (character) {
      const sprite = require(`${character.spritePath}`);

      return (
        <div
          style={{
            backgroundPosition: `${
              controlType === CONTROL_TYPE.EDIT
                ? "0px 0px"
                : character.spriteLocation
            }`,
            pointerEvents: `${"none"}`,
            backgroundImage: `url(${sprite})`,
            position: positioning,
            transform: transform,
            backgroundColor: backgroundColor
          }}
          className="Player"
        />
      );
    }
    return <div />;
  }
}

export default PlayerSprite;
