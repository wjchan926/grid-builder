import React, { Component } from "react";
import Map from "../Map";
import Player from "../Player";
import "./World.css";
import Monster from "../Player/Monster";

export default class World extends Component {
  render() {
    const { characterList, monsterList } = this.props;

    let players = [];
    let monsters = [];

    if (characterList.length !== 0) {
      characterList.forEach(character => {
        if (character.visible) {
          players.push(
            <div
              style={{ margin: "2px" }}
              key={`${character.id} ${character.id}`}
            >
              <Player
                character={character}
                position={character.location}
                key={character.id}
              />
            </div>
          );
        }
      });
    }

    if (monsterList.length !== 0) {
      monsterList.forEach(monster => {
        if (monster.visible) {
          monsters.push(
            <Monster
              monster={monster}
              position={monster.location}
              key={monster.id}
            />
          );
        }
      });
    }
    return (
      <div className="World">
        <Map />
        {players}
        {monsters}
      </div>
    );
  }
}
