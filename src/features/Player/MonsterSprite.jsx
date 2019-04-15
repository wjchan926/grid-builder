import React, { Component } from "react";

import "./Player.css";
import { CONTROL_TYPE, SPRITE_SIZE } from "../../config/constants";

export class MonsterSprite extends Component {
  render() {
    const { positioning, monster, controlType } = this.props;
    const { size } = this.props;

    let width = SPRITE_SIZE;
    let height = SPRITE_SIZE;

    switch (size) {
      case "large":
        width = SPRITE_SIZE * 2;
        height = SPRITE_SIZE * 2;
        break;
      case "huge":
        width = SPRITE_SIZE * 3;
        height = SPRITE_SIZE * 3;
        break;
      case "gargantuan":
        width = SPRITE_SIZE * 4;
        height = SPRITE_SIZE * 4;
        break;
      default:
        width = SPRITE_SIZE;
        height = SPRITE_SIZE;
        break;
    }

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
            backgroundColor: backgroundColor,
            width: width,
            height: height
          }}
          className="Monster"
        />
      );
    }
    return <div />;
  }
}

export default MonsterSprite;
