import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "../Map";
import Player from "../Player";

import { addTiles } from "./actions";

import "./World.css";

export class World extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.tiles !== state.tiles) {
      return {
        tiles: props.tiles
      };
    }
    return null;
  }

  render() {
    return (
      <div className="World">
        <Map />
        <Player />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tiles: state.map.tiles
});

const mapDispatchToProps = {
  addTiles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(World);
