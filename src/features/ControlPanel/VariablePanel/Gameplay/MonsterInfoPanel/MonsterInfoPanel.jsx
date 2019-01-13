import React, { Component } from "react";
import Stat from "../Stat/Stat";
import { Image, Input } from "semantic-ui-react";

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

  renderStatus = selectedMonster => {
    if (selectedMonster.hp === 0) {
      return <span className="Stat">Status: <span style={{color:"darkred"}}>DEAD</span></span>;
    }

    if (selectedMonster.maxhp === 1) {
      return <span className="Stat">Status: <span style={{color:"gold"}}>Normal</span></span>;
    }

    if (selectedMonster.hp < Math.ceil(parseInt(selectedMonster.maxhp) / 2)) {
      return <span className="Stat">Status: <span style={{color:"darkred"}}>Bloodied</span></span>;
    }

    return <span className="Stat">Status: <span style={{color:"gold"}}>Normal</span></span>;
  };

  renderDamageTaken = selectedMonster => {
    return (
      <span className="Stat">
        Damage: <span  style={{ color: "gold" }}>{selectedMonster.hp - selectedMonster.maxhp}</span>
      </span>
    );
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
        <Stat
          stat="HP"
          value={selectedMonster.hp}
          showButtons
          hideValue
          hideModifier
          name="hp"
          setStatValue={setMonsterStatValue}
        />
        {this.renderStatus(selectedMonster)}
        {this.renderDamageTaken(selectedMonster)}
      </div>
    );
  }
}

export default MonsterInfoPanel;
