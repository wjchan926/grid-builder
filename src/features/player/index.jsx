import React, { Component } from "react";
import { connect } from "react-redux";

import handleMovement from "./movement";

import "./player.css";

class Player extends Component {
  render() {
    const {position} = this.props;

    return (
      <div
        style={{
          top: position[1],
          left: position[0],
        }}
        className="Player"
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.player
  };
};


export default connect(mapStateToProps)(handleMovement(Player));
