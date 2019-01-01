import React, { Component } from "react";
import { MapTile } from "../../../Map/MapTile";
import "./EditMap.css";
import SelectorTile from "./SelectorTile";

export class TerrainSelector extends Component {
  render() {
    const { currentTerrain, setSelectedTerrainTile } = this.props;

    return (
      <div>
        <div className="TerrainRow">
          <SelectorTile
            tile={<MapTile tile={0} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={1} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={2} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={3} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
        </div>
        <div className="TerrainRow">
          <SelectorTile
            tile={<MapTile tile={4} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={5} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={6} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={7} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
        </div>
        <div className="TerrainRow">
          <SelectorTile
            tile={<MapTile tile={8} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
          <SelectorTile
            tile={<MapTile tile={9} />}
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
        </div>
      </div>
    );
  }
}

export default TerrainSelector;
