import React from "react";
import MonsterSprite from "../../../Player/MonsterSprite";
import SelectorMonster from "./SelectorMonster";

export function MonsterSelector(props){
    const { monsterList, controlType } = props;

    let monsterArr = [];

    monsterList.forEach(monster => {
      monsterArr.push(
        <SelectorMonster
          monster={monster}
          sprite={
            <MonsterSprite
              monster={monster}
              controlType={controlType}
              positioning="relative"
              key={`${monster.id}`}
            />
          }
          key={`${monster.id}`}
          controlType={controlType}
        />
      );
    });

    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"center" }}
        >
          {monsterArr}
        </div>
      </div>
    );
  }

export default MonsterSelector;
