import React, { Component } from "react";
import { Button, Modal, Input } from "semantic-ui-react";

import StockMonsters from "./StockMonsters";
import CreateEditChracter from "./CreateEditCharacter";
import CharacterSelector from "./CharacterSelector";
import MonsterSelector from "./MonsterSelector";

import "./EditPieces.css";

let fileReader;

export class EditPieces extends Component {
  state = {
    createEditModalVisible: false,
    mode: "create"
  };

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
      deleteCharacter,
      setSelectedPlayer,
      deleteMonster,
      setCurrentMonster,
      currentMonster,
      setSelectedMonster
    } = this.props;

    if (JSON.stringify(currentCharacter) !== "{}") {
      deleteCharacter(currentCharacter);
      setCurrentCharacter({});
      setSelectedPlayer({});
    }

    if (JSON.stringify(currentMonster) !== "{}") {
      deleteMonster(currentMonster);
      setCurrentMonster({});
      setSelectedMonster({});
    }
  };

  closeCreateEdit = () => this.setState({ createEditModalVisible: false });

  handleCharacterImport = () => {
    document.getElementById("selectedCharacterFile").click();
  };

  handleImportChange = file => {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  };

  handleFileRead = e => {
    const { generateCharacter } = this.props;
    const character = fileReader.result;
    generateCharacter(JSON.parse(character));
  };

  handleCharacterExport = () => {
    const { currentCharacter } = this.props;
    if (JSON.stringify(currentCharacter) !== "{}") {
      const character = Object.assign({}, currentCharacter);

      const portraitPath = "./playerSprites/portraits/";
      const spritePath = "./playerSprites/";

      const avatar = character.avatar;

      character.location = [];
      character.visible = false;
      character.spriteLocation = "0px 0px";
      character.walkIndex = 0;
      character.direction = 30;
      character.portraitPath = `${portraitPath}${avatar}`;
      character.spritePath = `${spritePath}${avatar}`;

      var element = document.createElement("a");
      var file = new Blob([JSON.stringify(character)], {
        type: "application/json"
      });
      element.href = URL.createObjectURL(file);
      element.download = `${currentCharacter.characterName}.json`;
      element.click();
    }
  };

  render() {
    const { createEditModalVisible, mode } = this.state;
    const {
      characterList,
      currentCharacter,
      monsterList,
      stockMonsterList,
      controlType
    } = this.props;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Edit Pieces</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button.Group vertical>
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
                JSON.stringify(currentCharacter) !== "{}"
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maringRight: "auto"
            }}
          >
            <Input
              type="file"
              id="selectedCharacterFile"
              style={{ display: "none" }}
              onChange={e => this.handleImportChange(e.target.files[0])}
            />
            <Input
              type="button"
              id="EditPieceButton"
              value="Import"
              onClick={this.handleCharacterImport}
              className="Import"
            />
            <Button
              content="Export"
              id="EditPieceButton"
              onClick={this.handleCharacterExport}
            />
          </div>
        </div>
        {characterList.length !== 0 ? (
          <div className="CharacterSelector">
            <div style={{ textAlign: "center" }}>Character Selector</div>
            <CharacterSelector
              characterList={characterList}
              controlType={controlType}
            />
          </div>
        ) : null}
        {monsterList.length !== 0 ? (
          <div className="MonsterSelector">
            <div style={{ textAlign: "center" }}>Monster Selector</div>
            <MonsterSelector
              monsterList={monsterList}
              controlType={controlType}
            />
          </div>
        ) : null}
        <div className="StockMonsters">
          <StockMonsters
            controlType={controlType}
            monsterList={stockMonsterList}
          />
        </div>
        <Modal
          open={createEditModalVisible}
          closeOnEscape={true}
          closeOnDimmerClick={false}
          onClose={this.closeCreateEdit}
          closeIcon
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
