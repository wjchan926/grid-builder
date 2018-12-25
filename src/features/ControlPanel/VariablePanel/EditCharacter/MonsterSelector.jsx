import React, { Component } from "react";
import { SPRITE_SIZE } from "../../../../config/constants";

import "../VariablePanel.css"

export class MonsterSelector extends Component {
  render() {
    // TODO: Update tiles with selectable buttons to replace map tiles
    // Replace with fetched array from database that contains jsons of all the monsters
    return (
      <div>
        <div className="MonsterRow">
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
        <div className="MonsterRow">
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
        <div className="MonsterRow">
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
        <div className="MonsterRow">
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
        <div className="MonsterRow">
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

export default MonsterSelector;
