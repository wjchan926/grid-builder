import React, { Component } from "react";

import { Popup } from "semantic-ui-react";

import "../EditPieces.css";

const timeoutLength = 2500;

export class SelectorCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      isOpen: false
    };
  }

  handleOnClick = e => {
    const { character, setCurrentCharacter, currentCharacter } = this.props;
    e.stopPropagation();

    if (currentCharacter === character) {
      this.setState({ selected: false });
      setCurrentCharacter(null);
    } else {
      this.setState({ selected: true });
      setCurrentCharacter(character);
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

  render() {
    const { character, currentCharacter, sprite } = this.props;
    const { selected, isOpen } = this.state;

    return (
      <Popup
        trigger={
          <div
            className={`Selector ${
              JSON.stringify(currentCharacter) === JSON.stringify(character) && selected ? `Highlight` : null
            }`}
            onClick={this.handleOnClick}
          >
            {sprite}
          </div>
        }
        content={
          <div>
            <div>{character.characterName}</div>
            <hr />
            <div>{character.playerName}</div>
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
