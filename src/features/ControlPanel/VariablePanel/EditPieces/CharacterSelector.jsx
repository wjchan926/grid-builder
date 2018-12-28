import React, { Component } from "react";
import PlayerSprite from "../../../Player/PlayerSprite";
import SelectorCharacter from "./SelectorCharacter/";

export class CharacterSelector extends Component {
  render() {
    const { characterList, controlType } = this.props;

    let characterArr = [];

    characterList.forEach((character, i) => {
      characterArr.push(
        <SelectorCharacter
          character={character}
          sprite={
            <PlayerSprite
              character={character}
              spriteLocation="0px 0px"
              controlType={controlType}
              positioning="relative"
              key={`${character.characterName} ${i}`}
            />
          }
          key={`${i}`}
        />
      );
    });

    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {characterArr}
        </div>
      </div>
    );
  }
}

export default CharacterSelector;
