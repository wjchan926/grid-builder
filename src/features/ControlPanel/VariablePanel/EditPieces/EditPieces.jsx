import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import MonsterSelector from "./MonsterSelector";
import CreateEditChracter from "./CreateEditCharacter";
import CharacterSelector from "./CharacterSelector";

import "./EditPieces.css";

export class EditPieces extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createEditModalVisible: false
    };
  }

  handleCreateEdit = () => {
    this.setState({ createEditModalVisible: true });
  };

  closeCreateEdit = () => this.setState({ createEditModalVisible: false });

  render() {
    const { createEditModalVisible } = this.state;
    const { characterList } = this.props;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Edit Pieces</div>
        <div>
          <Button.Group vertical>
            <Button
              id="EditPieceButton"
              content="Create"
              onClick={this.handleCreateEdit}
            />
            <Button id="EditPieceButton" content="Edit" />
            <Button id="EditPieceButton" content="Delete" />
          </Button.Group>
          <Button.Group vertical>
            <Button id="EditPieceButton" content="Import" />
            <Button id="EditPieceButton" content="Export" />
          </Button.Group>
        </div>
        {characterList.length !== 0 ? (
          <div className="CharacterSelector">
            <div style={{ textAlign: "center" }}>Character Selector</div>
            <CharacterSelector characterList={characterList} />
          </div>
        ) : null}
        <div className="Monster">
          <div style={{ textAlign: "center" }}>Monsters Selector</div>
          <MonsterSelector />
        </div>
        <Modal
          open={createEditModalVisible}
          closeOnEscape={true}
          closeOnDimmerClick={false}
          onClose={this.closeCreateEdit}
        >
          <Modal.Header>Create/Edit Character</Modal.Header>
          <Modal.Content>
            <CreateEditChracter closeCreateEdit={this.closeCreateEdit} />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default EditPieces;
