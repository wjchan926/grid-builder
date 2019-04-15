import React, { Component } from "react";

import { Popup } from "semantic-ui-react";

import "../EditPieces.css";
import { CONTROL_TYPE } from "../../../../../config/constants";

const timeoutLength = 2500;

export class SelectorMonster extends Component {
    state = {
      selected: false,
      isOpen: false
    };

  handleOnClick = e => {
    const {
      monster,
      setCurrentMonster,
      currentMonster,
      setCurrentCharacter,
      setSelectedPlayer,
      setSelectedMonster
    } = this.props;
    e.stopPropagation();

    if (JSON.stringify(currentMonster) === JSON.stringify(monster)) {
      this.setState({ selected: false });
      setSelectedMonster({});
      setCurrentMonster({});
    } else {
      this.setState({ selected: true });
      setSelectedPlayer({});
      setCurrentCharacter({});
      setSelectedMonster(monster)
      setCurrentMonster(monster);
    }
  };

  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, timeoutLength);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };

  renderClassName = () => {
    const { currentMonster, monster,controlType } = this.props;

    if (controlType === CONTROL_TYPE.MAP){
      return "";
    }
    
      return `Selector ${
        currentMonster.id === monster.id ? `Highlight` : null
      } `;  
  };

  render() {
    const { monster, sprite } = this.props;
    const { isOpen } = this.state;

    return (
      <Popup
        trigger={
          <div className={this.renderClassName()} onClick={this.handleOnClick}>
            {sprite}
          </div>
        }
        content={
          <div>
            <div>{monster.characterName}</div>
          </div>
        }
        position="top center"
        on="hover"
        open={isOpen}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
      />
    );
  }
}
