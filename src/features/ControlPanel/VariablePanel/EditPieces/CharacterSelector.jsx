import React from "react";
import PlayerSprite from "../../../Player/PlayerSprite";
import SelectorCharacter from "./SelectorCharacter/";

export function CharacterSelector(props) {
  const { characterList } = props;

  let characterArr = [];

  characterList.forEach(character => {
    characterArr.push(
      <SelectorCharacter
        character={character}
        sprite={
          <PlayerSprite
            character={character}
            spriteLocation="0px 0px"
            positioning="relative"
            key={`${character.id}`}
          />
        }
        key={`${character.id}`}
      />
    );
  });

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {characterArr}
      </div>
    </div>
  );
}

export default CharacterSelector;
