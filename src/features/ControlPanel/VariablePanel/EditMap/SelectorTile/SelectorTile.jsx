import React, { Component } from "react";

import "../EditMap.css";

export class SelectorTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false
    };
  }

  handleOnClick = e => {
    const { tile, setSelectedTerrainTile } = this.props;
    const { selected } = this.state;
    e.stopPropagation();

    this.setState({ selected: !selected });
    if (!selected) {
      setSelectedTerrainTile(tile.props.tile);
    } else {
      setSelectedTerrainTile(null);
    }
  };

  render() {
    const { tile } = this.props;
    const { selected } = this.state;
    console.warn(this.props);
    return (
      <div
        className={`Selector ${selected ? `Highlight` : null}`}
        onClick={this.handleOnClick}
      >
        {tile}
      </div>
    );
  }
}
