import React, { Component } from "react";
import Player from "../player";

import "./map.css";

export class Map extends Component {
  render() {
    return (
      <div className="Map">
        <Player />
      </div>
    );
  }
}

export default Map;
