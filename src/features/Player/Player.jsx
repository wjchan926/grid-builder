import React, { Component } from "react";

import "./Player.css";

import PlayerSprite from "./PlayerSprite";
import { SPRITE_SIZE, CONTROL_TYPE } from "../../config/constants";

export class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      isOpen: false,
      on: false,
    };
  }

  handleOnClick = e => {
    const { character, setSelectedPlayer, selectedPlayer } = this.props;
    e.stopPropagation();

    if (JSON.stringify(selectedPlayer) === JSON.stringify(character)) {
      this.setState({ selected: false });
      setSelectedPlayer({});
    } else {
      this.setState({ selected: true });
      setSelectedPlayer(character);
    }
  };

  handleOver = () => {
    const { controlType, selectedPlayer, character } = this.props;

    if (
      controlType === CONTROL_TYPE.PLAY &&
      selectedPlayer.id === character.id
    ) {
      this.setState({ on: true });
    }
  };

  handleLeave = () => {
    this.setState({ on: false });
  };

  renderClassName = () => {
    const {controlType, selectedPlayer, character, } = this.props;
    const { selected, on } = this.state;

    if (controlType !== CONTROL_TYPE.PLAY){
      return "";
    }

    return `${on ? "PlayerHover" : null} ${selectedPlayer.id === character.id &&
      selected
        ? `Highlight`
        : null}`
  }

  render() {
    const {
      position,
      controlType,
      character,
      positioning = "absolute",
    } = this.props;

    return (
      <div
        style={{
          top: position[1] * SPRITE_SIZE,
          left: position[0] * SPRITE_SIZE,
          position: positioning
        }}
        className={`Selector ${this.renderClassName()}`}
        onClick={controlType === CONTROL_TYPE.PLAY ? this.handleOnClick : null}
        onMouseOver={controlType === CONTROL_TYPE.PLAY ? this.handleOver : null}
        onMouseLeave={
          controlType === CONTROL_TYPE.PLAY ? this.handleLeave : null
        }
      >
        <PlayerSprite
          character={character}
          controlType={controlType}
          positioning={positioning}
        />
      </div>
    );
  }
}

export default Player;
