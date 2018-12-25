import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import MonsterSelector from "./MonsterSelector";

import "./EditPieces.css";

export class EditPieces extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign:"center"}}>Edit Pieces</div>
        <div>
          <Button.Group vertical>
            <Button id="EditPieceButton" content="Create" />
            <Button id="EditPieceButton" content="Edit" />
            <Button id="EditPieceButton" content="Move" />
            <Button id="EditPieceButton" content="Delete" />
          </Button.Group>
          <Button.Group vertical>
            <Button id="EditPieceButton" content="Import" />
            <Button id="EditPieceButton" content="Export" />
          </Button.Group>
        </div>
        <div className="Monster">
        <div style={{textAlign:"center"}}>Monsters Selector</div>
          <MonsterSelector />
        </div>
      </div>
    );
  }
}

export default EditPieces;
