import React, { Component } from "react";

import "./Player.css";
import { CONTROL_TYPE } from "../../config/constants";

export class PlayerSprite extends Component {
  render() {
    const { positioning, character, controlType } = this.props;

    let transform = "";
    if (controlType !== CONTROL_TYPE.EDIT) {
      transform = character.hp === 0 ? "rotate(90deg)" : "";
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
            transform: transform
          }}
          className="Player"
        />
      );
    }
    return <div />;
  }
}

export default PlayerSprite;
