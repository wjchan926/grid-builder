import React, { Component } from "react";
import { connect } from "react-redux";

import handleMovement from "./movement";

import "./player.css";
import { SPRITE_SIZE } from "../../config/constants";

class Player extends Component {
  render() {
    const { position } = this.props;

    return (
      <div
        style={{
          top: position[1],
          left: position[0],
          height: SPRITE_SIZE,
          width: SPRITE_SIZE
        }}
        className="Player"
      />
    );
  }
}
const mapStateToProps = state => ({
  ...state.player
});

export default connect(mapStateToProps, null)(handleMovement(Player));
