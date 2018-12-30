import React, { Component } from "react";
import InfoPanel from "./InfoPanel/";

export class Gameplay extends Component {
  render() {
 
    return (
      <div>
        <div style={{textAlign:"center"}}>Character Info</div>
        <InfoPanel/>
      </div>
    );
  }
}

export default Gameplay;
