import React, { Component } from "react";
import { connect } from "react-redux";
import walkSprite from "./player_walk.png";

class Player extends Component {
  render() {
    const {position} = this.props;

    return (
      <div
        style={{
          position: "relative",
          top: position[1],
          left: position[0],
          backgroundImage: `url(${walkSprite})`,
          backgroundPosition: "0 0",
          width: "40px",
          height: "40px"
        }}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.player
  };
};

export default connect(mapStateToProps)(Player);
