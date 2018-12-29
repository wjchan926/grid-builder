import React, { Component } from "react";

import "./Player.css";

export class PlayerSprite extends Component {
    
  render() {
    const { spriteLocation, positioning, character} = this.props;

    if (character){
        const sprite = require(`${character.spritePath}`);
        
        return (
          <div
            style={{
              backgroundPosition: spriteLocation,
              pointerEvents: `${"none"}`,
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
