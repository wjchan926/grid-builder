import React, { Component } from "react";
import { SPRITE_SIZE } from "../../../../config/constants";

import "../VariablePanel";

export class TerrainSelector extends Component {
  render() {
    // TODO: Update tiles with selectable buttons to replace map tiles
    return (
      <div>
        <div className="TerrainRow">
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
        </div>
        <div className="TerrainRow">
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
        </div>
        <div className="TerrainRow">
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
          <div
            style={{
              width: SPRITE_SIZE,
              height: SPRITE_SIZE,
              backgroundColor: "black",
              margin:"1px"
            }}
          />
        </div>
      </div>
    );
  }
}

export default TerrainSelector;
