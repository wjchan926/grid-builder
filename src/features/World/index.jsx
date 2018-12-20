import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../Map";
import Player from "../Player";

import { addTiles } from "./actions";

import "./World.css";

export class World extends Component {
  componentDidMount(){
    const {addTiles} = this.props;

    addTiles();
  }

  render() {
    return (
      <div className="World">
        <Map/>
        <Player />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTiles
};

export default connect(
  null,
  mapDispatchToProps
)(World);
