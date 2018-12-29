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
      createEditModalVisible: false,
      mode: "create"
    };
  }

  handleCreate = () => {
    this.setState({ createEditModalVisible: true, mode: "create" });
  };

  handleEdit = () => {
    this.setState({
      createEditModalVisible: true,
      mode: "edit"
    });
  };

  handleDelete = () => {
    const {
      setCurrentCharacter,
      currentCharacter,
      deleteCharacter
    } = this.props;
    if (JSON.stringify(currentCharacter) !== JSON.stringify({})) {
      deleteCharacter(currentCharacter);
      setCurrentCharacter({});
    }
  };

  closeCreateEdit = () => this.setState({ createEditModalVisible: false });

  render() {
    const { createEditModalVisible, mode } = this.state;
    const { characterList, currentCharacter } = this.props;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Edit Pieces</div>
        <div style={{display:"flex", flexDirection:"row"}}>
          <Button.Group vertical style={{marginLeft:"auto"}}>
            <Button
              id="EditPieceButton"
              content="Create"
              icon="add user"
              onClick={this.handleCreate}
            />
            <Button
              id="EditPieceButton"
              content="Edit"
              icon="edit"
              onClick={
                JSON.stringify(currentCharacter) !== JSON.stringify({})
                  ? this.handleEdit
                  : null
              }
            />
            <Button
              id="DeleteButton"
              content="Delete"
              icon="delete"
              onClick={this.handleDelete}
              className="Delete"
            />
          </Button.Group>
          <Button.Group vertical style={{marginRight:"auto"}}>
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
            <CreateEditChracter
              closeCreateEdit={this.closeCreateEdit}
              mode={mode}
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default EditPieces;
