import React, { Component } from "react";
import { MapTile } from "../../../Map/MapTile";
import "./EditMap.css";
import  SelectorTile  from "./SelectorTile/";

export class TerrainSelector extends Component {
  render() {
    // TODO: Update tiles with selectable buttons to replace map tiles
    return (
      <div>
        <div className="TerrainRow">
          <SelectorTile tile={<MapTile tile={0} />} />
          <SelectorTile tile={<MapTile tile={1} />} />
          <SelectorTile tile={<MapTile tile={2} />} />
        </div>
        <div className="TerrainRow">
          <SelectorTile tile={<MapTile tile={3} />} />
          <SelectorTile tile={<MapTile tile={4} />} />
          <SelectorTile tile={<MapTile tile={5} />} />
        </div>
        <div className="TerrainRow">
          <SelectorTile tile={<MapTile tile={6} />} />
          <SelectorTile tile={<MapTile tile={7} />} />
          <SelectorTile tile={<MapTile tile={8} />} />
        </div>
      </div>
    );
  }
}

export default TerrainSelector;
