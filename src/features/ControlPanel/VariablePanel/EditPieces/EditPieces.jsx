import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

import MonsterSelector from "./MonsterSelector";

import "./EditPieces.css";
import CreateEditChracter from "./CreateEditCharacter";

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
            <Button id="EditPieceButton" content="Move" />
            <Button id="EditPieceButton" content="Delete" />
          </Button.Group>
          <Button.Group vertical>
            <Button id="EditPieceButton" content="Import" />
            <Button id="EditPieceButton" content="Export" />
          </Button.Group>
        </div>
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
            <CreateEditChracter />
            <Modal.Actions>
              <Button onClick={this.closeCreateEdit} negative content="Exit" />
              <Button
                onClick={this.closeCreateEdit}
                positive
                labelPosition="right"
                icon="save"
                content="Create/Save Changes"
              />
            </Modal.Actions>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default EditPieces;
