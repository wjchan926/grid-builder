import React, { Component } from "react";

import "./Player.css";
import { CONTROL_TYPE } from "../../config/constants";

export class MonsterSprite extends Component {
  render() {
    const { positioning, monster, controlType } = this.props;

    let transform = "";
    if (controlType !== CONTROL_TYPE.EDIT) {
      transform = monster.hp === 0 ? "rotate(90deg)" : "";
    }

    if (monster) {
      const sprite = require(`${monster.spritePath}`);

      return (
        <div
          style={{
            backgroundPosition: "0px 0px",
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

export default MonsterSprite;
