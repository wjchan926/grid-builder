import React, { Component } from "react";
import Map from "../Map";
import Player from "../Player";

import "./World.css";

export class World extends Component {
   render() {
    return (
      <div className="World">
        <Map />
        <Player />
      </div>
    );
  }
}
export default World;