import React, { Component } from 'react'
import Map from "../map";

import "./world.css"

export class World extends Component {
  render() {
    return (
      <div className="World">
        <Map />
      </div>
    );
  }
}

export default World;
