import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import MonsterSelector from "./MonsterSelector";

import "../VariablePanel.css";

export class EditCharacters extends Component {
  render() {
    return (
      <div>
        <div>Edit Characters</div>
        <div>
          <Button.Group vertical>
            <Button content="Create" />
            <Button content="Edit" />
            <Button content="Move" />
            <Button content="Delete" />
          </Button.Group>
          <Button.Group vertical>
            <Button content="Import" />
            <Button content="Export" />
          </Button.Group>
        </div>
        <div className="Monsters">
          <div>Monsters Selector</div>
          <MonsterSelector />
        </div>
      </div>
    );
  }
}

export default EditCharacters;
