import React, { Component } from "react";
import { Accordion, Icon } from "semantic-ui-react";
import SelectorMonster from "./SelectorMonster";

import "./EditPieces.css";
import MonsterSprite from "../../../Player/MonsterSprite";

export class StockMonsters extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  generateStockMonsterGrid = () => {
    const { monsterList, controlType } = this.props;

    const monsterGrid = [];

    monsterList.forEach(monster => {
      monsterGrid.push(
          <SelectorMonster
            monster={monster}
            key={`${monster.id}`}
            sprite={
              <MonsterSprite
                monster={monster}
                controlType={controlType}
                positioning="relative"
                key={`${monster.id}`}
              />
            }
          />
      );
    });

    return monsterGrid;
  };

  render() {
    // TODO: Update tiles with selectable buttons to replace map tiles

    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          Stock Monsters
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" , justifyContent:"center"}}
          >
            {this.generateStockMonsterGrid()}
          </div>
        </Accordion.Content>
      </Accordion>
    );
  }
}

export default StockMonsters;
