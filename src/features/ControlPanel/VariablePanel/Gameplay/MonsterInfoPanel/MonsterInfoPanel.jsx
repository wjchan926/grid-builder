import React, { Component } from "react";
import Stat from "../Stat/Stat";
import InputStat from "../Stat/InputStat";
import { Form, Image, Input } from "semantic-ui-react";

import "../Gameplay.css";

export class MonsterInfoPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonster: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      JSON.stringify(props.selectedMonster) !==
      JSON.stringify(state.selectedMonster)
    ) {
      return { selectedMonster: props.selectedMonster };
    }
    return null;
  }

  handleTextChange = e => {
    const { setMonsterStatValue } = this.props;

    const stat = Object.assign({});
    stat[e.target.name] = e.target.value;

    setMonsterStatValue(stat);
  };

  render() {
    const { setMonsterStatValue } = this.props;
    const { selectedMonster = {} } = this.state;
    let imageFilename = "monsterSprites/portraits/placeholder.png";

    if (JSON.stringify(selectedMonster) !== "{}") {
      imageFilename = selectedMonster.portraitPath.replace("./", "");
    }

    const portrait = require(`../../../../Player/${imageFilename}`);

    return (
      <div className="InfoPanel">
        <Image className="Picture" src={portrait} />
        <span>
          <label>Name: </label>
          <Input
            style={{ width: "130px", height: "25px", marginLeft: "5px" }}
            placeholder=""
            value={selectedMonster.characterName}
            name="characterName"
            onChange={this.handleTextChange}
          />
        </span>
        <InputStat
          stat="HP: "
          value={selectedMonster.hp}
          showButtons={true}
          name="hp"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="AC: "
          value={selectedMonster.ac}
          showButtons={true}
          name="ac"
          setStatValue={setMonsterStatValue}
        />
        <InputStat
          stat="Speed: "
          value={selectedMonster.speed}
          showButtons={false}
          name="speed"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Str: "
          value={selectedMonster.strength}
          showButtons={true}
          name="strength"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Dex: "
          value={selectedMonster.dexterity}
          showButtons={true}
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Con: "
          value={selectedMonster.constitution}
          showButtons={true}
          name="constitution"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Int: "
          value={selectedMonster.intelligence}
          showButtons={true}
          name="intelligence"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Wis: "
          value={selectedMonster.wisdom}
          showButtons={true}
          name="wisdom"
          setStatValue={setMonsterStatValue}
        />
        <Stat
          stat="Cha: "
          value={selectedMonster.charisma}
          showButtons={true}
          name="charisma"
          setStatValue={setMonsterStatValue}
        />
        <Form>
          <Form.TextArea
            label="Skills"
            autoHeight
            placeholder=""
            value={selectedMonster.skills}
            name="skills"
            onChange={this.handleTextChange}
          />
          <Form.TextArea
            label="Senses"
            autoHeight
            placeholder=""
            value={selectedMonster.senses}
            name="senses"
            onChange={this.handleTextChange}
          />
          <Form.TextArea
            label="Other Info"
            autoHeight
            placeholder=""
            value={selectedMonster.otherInfo}
            name="otherInfo"
            onChange={this.handleTextChange}
          />
          <Form.TextArea
            label="Actions"
            autoHeight
            placeholder=""
            value={selectedMonster.actions}
            name="actions"
            onChange={this.handleTextChange}
          />
          <Form.TextArea
            label="Challenge"
            autoHeight
            placeholder=""
            value={selectedMonster.challenge}
            name="challenge"
            onChange={this.handleTextChange}
          />
        </Form>
      </div>
    );
  }
}

export default MonsterInfoPanel;
