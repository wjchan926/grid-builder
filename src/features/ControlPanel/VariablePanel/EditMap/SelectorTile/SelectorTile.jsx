import React, { Component } from "react";

import "../EditMap.css";
import { getTileSprite } from "../../../../Map/MapTile";

export class SelectorTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  static getDervivedStateFromProps(props, state) {}

  handleOnClick = e => {
    const { tile, setSelectedTerrainTile, currentTerrain } = this.props;
    e.stopPropagation();

    if (currentTerrain === getTileSprite(tile.props.tile)) {
      this.setState({ selected: false });
      setSelectedTerrainTile(null);
    } else {
      this.setState({ selected: true });
      setSelectedTerrainTile(tile.props.tile);
    }
  };

  render() {
    const { tile, currentTerrain } = this.props;
    const { selected } = this.state;

    return (
      <div
        className={`Selector ${
          currentTerrain === getTileSprite(tile.props.tile) && selected ? `Highlight` : null
        }`}
        onClick={this.handleOnClick}
      >
        {tile}
      </div>
    );
  }
}
