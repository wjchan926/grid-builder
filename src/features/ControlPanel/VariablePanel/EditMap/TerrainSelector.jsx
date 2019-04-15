import React from "react";
import { MapTile } from "../../../Map/MapTile";
import "./EditMap.css";
import SelectorTile from "./SelectorTile";

export function TerrainSelector(props) {
  const { currentTerrain, setSelectedTerrainTile } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
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
        <SelectorTile
          tile={<MapTile tile={10} />}
          setSelectedTerrainTile={setSelectedTerrainTile}
          currentTerrain={currentTerrain}
        />
        <SelectorTile
          tile={<MapTile tile={11} />}
          setSelectedTerrainTile={setSelectedTerrainTile}
          currentTerrain={currentTerrain}
        />
        <SelectorTile
          tile={<MapTile tile={99} />}
          setSelectedTerrainTile={setSelectedTerrainTile}
          currentTerrain={currentTerrain}
        />
      </div>
    </div>
  );
}

export default TerrainSelector;
