import React, { Component } from "react";

import "../Player.css";

import { SPRITE_SIZE, CONTROL_TYPE } from "../../../config/constants";
import MonsterSprite from "../MonsterSprite";

export class Monster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      isOpen: false,
      on: false
    };
  }

  handleOnClick = e => {
    const {
      monster,
      setSelectedMonster,
      selectedMonster,
      setSelectedPlayer,
      setCurrentCharacter,
      setCurrentMonster
    } = this.props;
    e.stopPropagation();

    if (JSON.stringify(selectedMonster) === JSON.stringify(monster)) {
      this.setState({ selected: false });
      setCurrentMonster({});
      setSelectedMonster({});
    } else {
      this.setState({ selected: true });
      setSelectedPlayer({});
      setCurrentCharacter({});
      setCurrentMonster(monster);
      setSelectedMonster(monster);
    }
  };

  handleOver = () => {
    const { controlType, selectedMonster, monster } = this.props;

    if (
      controlType === CONTROL_TYPE.PLAY &&
      selectedMonster.id === monster.id
    ) {
      this.setState({ on: true });
    }
  };

  handleLeave = () => {
    this.setState({ on: false });
  };

  renderClassName = () => {
    const {
      controlType,
      selectedMonster,
      monster,
      currentMonster
    } = this.props;
    const { selected, on } = this.state;

    if (controlType === CONTROL_TYPE.MAP) {
      return "";
    }

    return `${on ? "PlayerHover" : null} ${
      selectedMonster.id === monster.id && selected ? `Highlight` : null
    } ${currentMonster.id === monster.id ? `Highlight` : null}`;
  };

  render() {
    const {
      position,
      controlType,
      monster,
      positioning = "absolute"
    } = this.props;

    return (
      <div
        style={{
          top: position[1] * SPRITE_SIZE,
          left: position[0] * SPRITE_SIZE,
          position: positioning
        }}
        className={`Selector ${this.renderClassName()}`}
        onClick={controlType !== CONTROL_TYPE.MAP ? this.handleOnClick : null}
        onMouseOver={controlType  !== CONTROL_TYPE.MAP ? this.handleOver : null}
        onMouseLeave={
          controlType  !== CONTROL_TYPE.MAP ? this.handleLeave : null
        }
      >
        <MonsterSprite
          monster={monster}
          controlType={controlType}
          positioning={positioning}
        />
      </div>
    );
  }
}

export default Monster;
