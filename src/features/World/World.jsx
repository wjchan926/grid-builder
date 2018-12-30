import React, { Component } from "react";
import Map from "../Map";
import Player from "../Player";
import "./World.css";

export default class World extends Component {
  render() {
    const { selectedPlayer, characterList, controlType } = this.props;
    let players = [];

    characterList.forEach(character => {
      if (character.visible) {
        players.push(
          <Player
            character={character}
            position={character.location}
            controlType={controlType}
            key={character.id}
            selectedPlayer={selectedPlayer}
          />
        );
      }
    });

    return (
      <div className="World">
        <Map />
        {players}
      </div>
    );
  }
}
