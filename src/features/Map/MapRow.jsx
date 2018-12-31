import React, { Component } from "react";
import MapTile from "./MapTile";
import MapTileWrapper from "./MapTileWrapper";

export default class MapRow extends Component {
  render() {
    const {
      row,
      rowIndex,
      controlType,
      selectedTerrain,
      setTile,
      currentCharacter,
      setPlayerLocation,
      currentMonster,
      setMonsterLocation
    } = this.props;

    return (
      <div className="row">
        {row.map((tile, columnIndex) => {
          return (
            <MapTileWrapper
              key={`${rowIndex} ${columnIndex} Wrapper`}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              controlType={controlType}
              selectedTerrain={selectedTerrain}
              setTile={setTile}
              currentCharacter={currentCharacter}
              setPlayerLocation={setPlayerLocation}
              setMonsterLocation={setMonsterLocation}
              currentMonster={currentMonster}
              mapTile={
                <MapTile
                  tile={tile}
                  key={`${rowIndex} ${columnIndex}`}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  controlType={controlType}
                  selectedTerrain={selectedTerrain}
                />
              }
            />
          );
        })}
      </div>
    );
  }
}
