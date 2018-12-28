import React, { Component } from "react";
import { CONTROL_TYPE } from "../../config/constants";

import "./Player.css";

export class PlayerSprite extends Component {
    
  render() {
    const { spriteLocation, controlType, positioning, character} = this.props;

    if (character){
        const sprite = require(`${character.spritePath}`);
        
        return (
          <div
            style={{
              backgroundPosition: spriteLocation,
              pointerEvents: `${controlType === CONTROL_TYPE.PLAY ? "" : "none"}`,
              backgroundImage: `url(${sprite})`,
              position: positioning
            }}
            className="Player"
          />
        );
    }
    return <div/>
  }
}

export default PlayerSprite;
