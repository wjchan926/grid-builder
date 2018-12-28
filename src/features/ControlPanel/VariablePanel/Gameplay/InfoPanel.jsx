import React, { Component } from "react";
import Stat from "./Stat";

import "./Gameplay.css";
import { TextArea, Form } from "semantic-ui-react";

export class InfoPanel extends Component {
  render() {
    const { selectedCharacter = {} } = this.props;

    return (
      <div className="InfoPanel">
        <div className="Picture" />
        <Stat stat="Name:" value={selectedCharacter.name} showButtons={false} />
        <Stat
          stat="Class:"
          value={selectedCharacter.class}
          showButtons={false}
        />
        <Stat stat="Race:" value={selectedCharacter.race} showButtons={false} />
        <Stat stat="Lvl:" value={selectedCharacter.level} showButtons={true} />
        <Stat
          stat="HP:"
          value={selectedCharacter.healthPoints}
          showButtons={true}
        />
        <Stat
          stat="AC:"
          value={selectedCharacter.armorClass}
          showButtons={true}
        />
        <Stat
          stat="MS:"
          value={selectedCharacter.movementSpeed}
          showButtons={true}
        />
        <Stat
          stat="Str:"
          value={selectedCharacter.stength}
          showButtons={true}
        />
        <Stat
          stat="Dex:"
          value={selectedCharacter.dexterity}
          showButtons={true}
        />
        <Stat
          stat="Con:"
          value={selectedCharacter.constitution}
          showButtons={true}
        />
        <Stat
          stat="Int:"
          value={selectedCharacter.intelligence}
          showButtons={true}
        />
        <Stat stat="Wis:" value={selectedCharacter.wisdom} showButtons={true} />
        <Stat
          stat="Cha:"
          value={selectedCharacter.charisma}
          showButtons={true}
        />
        <span>Other Notes</span>
        <Form>
          <TextArea autoHeight placeholder="Add Character Info" />
        </Form>
      </div>
    );
  }
}

export default InfoPanel;
