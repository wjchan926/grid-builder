import React, { Component } from "react";
import Stat from "../Stat/Stat";
import { Form, Image } from "semantic-ui-react";

import "../Gameplay.css";

export class InfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPlayer: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      JSON.stringify(props.selectedPlayer) !==
      JSON.stringify(state.selectedPlayer)
    ) {
      return { selectedPlayer: props.selectedPlayer };
    }
    return null;
  }

  handleTextChange = e => {
    const { setStatValue } = this.props;

    const stat = Object.assign({});
    stat[e.target.name] = e.target.value;

    setStatValue(stat);
  };

  render() {
    const { setStatValue } = this.props;
    const { selectedPlayer = {} } = this.state;
    let imageFilename = "playerSprites/portraits/placeholder.png";

    if (JSON.stringify(selectedPlayer) !== JSON.stringify({})) {
      imageFilename = selectedPlayer.portraitPath.replace("./", "");
    }

    const portrait = require(`../../../../Player/${imageFilename}`);

    return (
      <div className="InfoPanel">
        <Image className="Picture" src={portrait} />
        <Stat
          stat="Name: "
          value={selectedPlayer.characterName}
          showButtons={false}
        />
        <Stat
          stat="Class: "
          value={selectedPlayer.dndClass}
          showButtons={false}
        />
        <Stat stat="Race: " value={selectedPlayer.race} showButtons={false} />
        <Stat
          stat="Lvl: "
          value={selectedPlayer.level}
          showButtons={true}
          name="level"
          setStatValue={setStatValue}
        />
        <Stat
          stat="HP: "
          value={selectedPlayer.hp}
          showButtons={true}
          name="hp"
          setStatValue={setStatValue}
        />
        <Stat
          stat="AC: "
          value={selectedPlayer.ac}
          showButtons={true}
          name="ac"
          setStatValue={setStatValue}
        />
        <Stat
          stat="MS: "
          value={selectedPlayer.ms}
          showButtons={true}
          name="ms"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Str: "
          value={selectedPlayer.strength}
          showButtons={true}
          name="strength"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Dex: "
          value={selectedPlayer.dexterity}
          showButtons={true}
          name="dexterity"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Con: "
          value={selectedPlayer.constitution}
          showButtons={true}
          name="constitution"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Int: "
          value={selectedPlayer.intelligence}
          showButtons={true}
          name="intelligence"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Wis: "
          value={selectedPlayer.wisdom}
          showButtons={true}
          name="wisdom"
          setStatValue={setStatValue}
        />
        <Stat
          stat="Cha: "
          value={selectedPlayer.charisma}
          showButtons={true}
          name="charisma"
          setStatValue={setStatValue}
        />
        <Form>
          <Form.TextArea
            label="Equipment"
            autoHeight
            placeholder="Equipment"
            value={
              JSON.stringify(selectedPlayer) !== JSON.stringify({})
                ? selectedPlayer.equipment
                : ""
            }
            onChange={this.handleTextChange}
            name="equipment"
          />
          <Form.TextArea
            label="Proficiencies"
            autoHeight
            placeholder="Proficiencies and Languages"
            value={
              JSON.stringify(selectedPlayer) !== JSON.stringify({})
                ? selectedPlayer.profAndLang
                : ""
            }
            onChange={this.handleTextChange}
            name="profAndLang"
          />
          <Form.TextArea
            label={`Features & Traits`}
            autoHeight
            placeholder="Feature and Traits"
            value={
              JSON.stringify(selectedPlayer) !== JSON.stringify({})
                ? selectedPlayer.featAndTraits
                : ""
            }
            onChange={this.handleTextChange}
            name="featAndTraits"
          />
          <Form.TextArea
            label="Other Info"
            autoHeight
            placeholder="Other Character Info"
            value={
              JSON.stringify(selectedPlayer) !== JSON.stringify({})
                ? selectedPlayer.otherInfo
                : ""
            }
            onChange={this.handleTextChange}
            name="otherInfo"
          />
        </Form>
      </div>
    );
  }
}

export default InfoPanel;
