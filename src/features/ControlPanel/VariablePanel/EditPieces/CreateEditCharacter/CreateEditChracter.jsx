import React, { Component } from "react";
import { Form, Image } from "semantic-ui-react";

const race = [
  { key: "Dwarf", text: "Dwarf", value: "Dwarf" },
  { key: "Elf", text: "Elf", value: "Elf" },
  { key: "Halfling", text: "Halfling", value: "Halfling" },
  { key: "Human", text: "Human", value: "Human" },
  { key: "Dragonborn", text: "Dragonborn", value: "Dragonborn" },
  { key: "Gnome", text: "Gnome", value: "Gnome" },
  { key: "HalfElf", text: "HalfElf", value: "HalfElf" },
  { key: "HalfOrc", text: "HalfOrc", value: "HalfOrc" },
  { key: "Tiefling", text: "Tiefling", value: "Tiefling" }
];

const dndClass = [
  { key: "Barbarian", text: "Barbarian", value: "Barbarian" },
  { key: "Bard", text: "Bard", value: "Bard" },
  { key: "Cleric", text: "Cleric", value: "Cleric" },
  { key: "Druid", text: "Cleric", value: "Cleric" },
  { key: "Fighter", text: "Fighter", value: "Fighter" },
  { key: "Monk", text: "Monk", value: "Monk" },
  { key: "Paladin", text: "Paladin", value: "Paladin" },
  { key: "Ranger", text: "Ranger", value: "Ranger" },
  { key: "Rogue", text: "Rogue", value: "Rogue" },
  { key: "Sorcerer", text: "Sorcerer", value: "Sorcerer" },
  { key: "Warlock", text: "Warlock", value: "Warlock" },
  { key: "Wizard", text: "Wizard", value: "Wizard" }
];

const level = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
  { key: "9", text: "9", value: "9" },
  { key: "10", text: "10", value: "10" },
  { key: "11", text: "11", value: "11" },
  { key: "12", text: "12", value: "12" },
  { key: "13", text: "13", value: "13" },
  { key: "14", text: "14", value: "14" },
  { key: "15", text: "15", value: "15" },
  { key: "16", text: "16", value: "16" },
  { key: "17", text: "17", value: "17" },
  { key: "18", text: "18", value: "18" },
  { key: "19", text: "19", value: "19" },
  { key: "20", text: "20", value: "20" }
];

const portrait = [
  {
    key: "BlackMage",
    text: "Black Mage",
    value: "Black Mage",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/BlackMage.png")
    }
  },
  {
    key: "Dragoon",
    text: "Dragoon",
    value: "Dragoon",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Dragoon.png")
    }
  },
  {
    key: "Druid",
    text: "Druid",
    value: "Druid",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Druid.png")
    }
  },
  {
    key: "HolyDragoon",
    text: "Holy Dragoon",
    value: "Holy Dragoon",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/HolyDragoon.png")
    }
  },
  {
    key: "Kid",
    text: "Kid",
    value: "Kid",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Kid.png")
    }
  }
];

export class CreateEditChracter extends Component {
  render() {
    console.log(portrait);
    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Character Name"
              placeholder="Character Name"
            />
            <Form.Input fluid label="Player Name" placeholder="Player Name" />
            <Form.Select fluid label="Portrait" options={portrait} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Class"
              options={dndClass}
              placeholder="Class"
            />
            <Form.Select fluid label="Race" options={race} placeholder="Race" />
            <Form.Select
              fluid
              label="Level"
              options={level}
              placeholder="Level"
            />
            <Form.Input fluid label="Experience" placeholder="Experience" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Health Points"
              placeholder="Health Points"
            />
            <Form.Input fluid label="Armor Class" placeholder="Armor Class" />
            <Form.Input fluid label="Speed" placeholder="Speed" />
          </Form.Group>
          <Form.Group
            style={{
              width: "100%"
            }}
          >
            <Form.Group
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                padding: "7px"
              }}
            >
              <Form.Input label="Strength" placeholder="Strength" />
              <Form.Input label="Dexterity" placeholder="Dexterity" />
              <Form.Input label="Constitution" placeholder="Constitution" />
              <Form.Input label="Intelligence" placeholder="Intelligence" />
              <Form.Input label="Wisdom" placeholder="Wisdom" />
              <Form.Input label="Charisma" placeholder="Charisma" />
            </Form.Group>
            <Form.Group
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "0 0 0 7px"
              }}
            >
              <Form.TextArea label="Equipment" placeholder="Equipment" />
              <Form.TextArea
                label={`Other Proficiencies & Languages`}
                placeholder={`Other Proficiencies & Languages`}
              />
              <Form.TextArea
                label={`Features & Traits`}
                placeholder={`Features & Traits`}
              />
              <Form.TextArea label="Other Info" placeholder="Other Info" />
            </Form.Group>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default CreateEditChracter;
