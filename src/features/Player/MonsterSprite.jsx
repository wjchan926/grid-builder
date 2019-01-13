import React, { Component } from "react";

import "./Player.css";
import { CONTROL_TYPE } from "../../config/constants";

export class MonsterSprite extends Component {
  render() {
    const { positioning, monster, controlType } = this.props;

    let transform = "";
    let backgroundColor = "";
    if (controlType !== CONTROL_TYPE.EDIT) {
      transform = parseInt(monster.hp) === 0 ? "rotate(90deg)" : "";
      if (monster.hp === 0) {
        backgroundColor = "red";
      } else if (monster.hp < Math.ceil(parseInt(monster.maxhp) / 2)) {
        backgroundColor = "indianred";
      }
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
            transform: transform,
            backgroundColor: backgroundColor
          }}
          className="Monster"
        />
      );
    }
    return <div />;
  }
}

export default MonsterSprite;
