import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import uuid from "uuid";
import { SPRITE_SIZE, DIRECTION } from "../../../../../config/constants";

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

const avatar = [
  {
    key: "BlackMage",
    text: "Black Mage",
    value: "BlackMage.png",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/BlackMage.png")
    }
  },
  {
    key: "Dragoon",
    text: "Dragoon",
    value: "Dragoon.png",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Dragoon.png")
    }
  },
  {
    key: "Druid",
    text: "Druid",
    value: "Druid.png",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Druid.png")
    }
  },
  {
    key: "HolyDragoon",
    text: "Holy Dragoon",
    value: "HolyDragoon.png",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/HolyDragoon.png")
    }
  },
  {
    key: "Kid",
    text: "Kid",
    value: "Kid.png",
    image: {
      avatar: true,
      src: require("../../../../Player/playerSprites/portraits/Kid.png")
    }
  }
];

export class CreateEditChracter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterFormData: {
        id: "",
        characterName: "",
        playerName: "",
        avatar: "",
        dndClass: "",
        race: "",
        level: null,
        hp: null,
        ac: null,
        ms: null,
        strength: null,
        dexterity: null,
        constitution: null,
        intelligence: null,
        wisdom: null,
        charisma: null,
        equipment: "",
        profAndLang: "",
        featAndTraits: "",
        otherInfo: "",
        portraitPath: "",
        spritePath: "",
        location: [0, 0],
        visible: false,
        spriteLocation: `${SPRITE_SIZE * 0}px ${SPRITE_SIZE * 0}px`,
        walkIndex: 0,
        direction: DIRECTION.SOUTH
      }
    };
  }

  componentDidMount() {
    const { currentCharacter, mode } = this.props;

    if (
      mode === "edit" &&
      JSON.stringify(currentCharacter) !== JSON.stringify({})
    ) {
      this.setState({ characterFormData: currentCharacter });
    }
  }

  createCharacter = () => {
    const { generateCharacter, closeCreateEdit, mode } = this.props;
    const { characterFormData: formData } = this.state;
    const { avatar } = formData;

    const portraitPath = "./playerSprites/portraits/";
    const spirtePath = "./playerSprites/";

    let characterFormData = Object.assign({}, formData);

    characterFormData["portraitPath"] = `${portraitPath}${avatar}`;
    characterFormData["spritePath"] = `${spirtePath}${avatar}`;

    if (mode === "create") {
      characterFormData["id"] = uuid.v4();
    }

    this.setState({ characterFormData });
    generateCharacter(characterFormData);
    closeCreateEdit();
  };

  handleInputChange = e => {
    let characterFormData = Object.assign({}, this.state.characterFormData);
    characterFormData[e.target.name] = e.target.value;

    this.setState({ characterFormData });
  };

  handleSelectChange = (e, value) => {
    let characterFormData = Object.assign({}, this.state.characterFormData);
    characterFormData[value.name] = value.value;

    this.setState({ characterFormData });
  };

  render() {
    const { closeCreateEdit } = this.props;
    const { characterFormData } = this.state;

    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Character Name"
              placeholder="Character Name"
              name="characterName"
              onChange={this.handleInputChange}
              value={characterFormData.characterName}
            />
            <Form.Input
              fluid
              label="Player Name"
              placeholder="Player Name"
              name="playerName"
              onChange={this.handleInputChange}
              value={characterFormData.playerName}
            />
            <Form.Select
              fluid
              label="Avatar"
              options={avatar}
              name="avatar"
              onChange={this.handleSelectChange}
              value={characterFormData.avatar}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              fluid
              label="Class"
              options={dndClass}
              placeholder="Class"
              name="dndClass"
              onChange={this.handleSelectChange}
              value={characterFormData.dndClass}
            />
            <Form.Select
              fluid
              label="Race"
              options={race}
              placeholder="Race"
              name="race"
              onChange={this.handleSelectChange}
              value={characterFormData.race}
            />
            <Form.Select
              fluid
              label="Level"
              options={level}
              placeholder="Level"
              name="level"
              onChange={this.handleSelectChange}
              value={characterFormData.level}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Health Points"
              placeholder="Health Points"
              name="hp"
              onChange={this.handleInputChange}
              value={characterFormData.hp}
            />
            <Form.Input
              fluid
              label="Armor Class"
              placeholder="Armor Class"
              name="ac"
              onChange={this.handleInputChange}
              value={characterFormData.ac}
            />
            <Form.Input
              fluid
              label="Movement Speed"
              placeholder="Movement Speed"
              name="ms"
              onChange={this.handleInputChange}
              value={characterFormData.ms}
            />
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
              <Form.Input
                label="Strength"
                placeholder="Strength"
                name="strength"
                onChange={this.handleInputChange}
                value={characterFormData.strength}
              />
              <Form.Input
                label="Dexterity"
                placeholder="Dexterity"
                name="dexterity"
                onChange={this.handleInputChange}
                value={characterFormData.dexterity}
              />
              <Form.Input
                label="Constitution"
                placeholder="Constitution"
                name="constitution"
                onChange={this.handleInputChange}
                value={characterFormData.constitution}
              />
              <Form.Input
                label="Intelligence"
                placeholder="Intelligence"
                name="intelligence"
                onChange={this.handleInputChange}
                value={characterFormData.intelligence}
              />
              <Form.Input
                label="Wisdom"
                placeholder="Wisdom"
                name="wisdom"
                onChange={this.handleInputChange}
                value={characterFormData.wisdom}
              />
              <Form.Input
                label="Charisma"
                placeholder="Charisma"
                name="charisma"
                onChange={this.handleInputChange}
                value={characterFormData.charisma}
              />
            </Form.Group>
            <Form.Group
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "0 0 0 7px"
              }}
            >
              <Form.TextArea
                label="Equipment"
                placeholder="Equipment"
                name="equipment"
                onChange={this.handleInputChange}
                value={characterFormData.equipment}
              />
              <Form.TextArea
                label={`Other Proficiencies & Languages`}
                placeholder={`Other Proficiencies & Languages`}
                name="profAndLang"
                onChange={this.handleInputChange}
                value={characterFormData.profAndLang}
              />
              <Form.TextArea
                label={`Features & Traits`}
                placeholder={`Features & Traits`}
                name="featAndTraits"
                onChange={this.handleInputChange}
                value={characterFormData.featAndTraits}
              />
              <Form.TextArea
                label="Other Info"
                placeholder="Other Info"
                name="otherInfo"
                onChange={this.handleInputChange}
                value={characterFormData.otherInfo}
              />
            </Form.Group>
          </Form.Group>
        </Form>
        <Form.Group style={{ display: "flex", flexDirection: "row" }}>
          <Form.Button onClick={closeCreateEdit} negative content="Exit" />
          <Form.Button
            onClick={this.createCharacter}
            positive
            labelPosition="right"
            icon="save"
            content="Create/Save Changes"
          />
        </Form.Group>
      </div>
    );
  }
}

export default CreateEditChracter;
