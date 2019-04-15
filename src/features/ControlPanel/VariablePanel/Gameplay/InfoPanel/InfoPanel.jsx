import React from "react";
import Stat from "../Stat/Stat";
import { Form, Image } from "semantic-ui-react";

import "../Gameplay.css";

export function InfoPanel(props) {
  const handleTextChange = e => {
    const { setStatValue } = props;

    const stat = Object.assign({});
    stat[e.target.name] = e.target.value;

    setStatValue(stat);
  };

  const { setStatValue, selectedPlayer = {} } = props;
  let imageFilename = "playerSprites/portraits/placeholder.png";

  if (JSON.stringify(selectedPlayer) !== "{}") {
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
        hideModifier
      />
      <Stat
        stat="Class: "
        value={selectedPlayer.dndClass}
        showButtons={false}
        hideModifier
      />
      <Stat
        stat="Race: "
        value={selectedPlayer.race}
        showButtons={false}
        hideModifier
      />
      <Stat
        stat="Lvl: "
        value={selectedPlayer.level}
        showButtons={true}
        name="level"
        setStatValue={setStatValue}
        hideModifier
      />
      <Stat
        stat="HP: "
        value={selectedPlayer.hp}
        showButtons={true}
        name="hp"
        setStatValue={setStatValue}
        hideModifier
      />
      <Stat
        stat="AC: "
        value={selectedPlayer.ac}
        showButtons={true}
        name="ac"
        setStatValue={setStatValue}
        hideModifier
      />
      <Stat
        stat="MS: "
        value={selectedPlayer.ms}
        showButtons={true}
        name="ms"
        setStatValue={setStatValue}
        hideModifier
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
            JSON.stringify(selectedPlayer) !== "{}"
              ? selectedPlayer.equipment
              : ""
          }
          onChange={handleTextChange}
          name="equipment"
        />
        <Form.TextArea
          label="Proficiencies"
          autoHeight
          placeholder="Proficiencies and Languages"
          value={
            JSON.stringify(selectedPlayer) !== "{}"
              ? selectedPlayer.profAndLang
              : ""
          }
          onChange={handleTextChange}
          name="profAndLang"
        />
        <Form.TextArea
          label={`Features & Traits`}
          autoHeight
          placeholder="Feature and Traits"
          value={
            JSON.stringify(selectedPlayer) !== "{}"
              ? selectedPlayer.featAndTraits
              : ""
          }
          onChange={handleTextChange}
          name="featAndTraits"
        />
        <Form.TextArea
          label="Other Info"
          autoHeight
          placeholder="Other Character Info"
          value={
            JSON.stringify(selectedPlayer) !== "{}"
              ? selectedPlayer.otherInfo
              : ""
          }
          onChange={handleTextChange}
          name="otherInfo"
        />
      </Form>
    </div>
  );
}

export default InfoPanel;
