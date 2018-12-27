import React, { Component } from "react";

import "../EditMap.css";
import { getTileSprite } from "../../../../../utils/helpers";
import { Popup } from "semantic-ui-react";

const timeoutLength = 2500;

export class SelectorTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      isOpen: false
    };
  }

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

  handleOpen = () => {
    this.setState({ isOpen: true });

    this.timeout = setTimeout(() => {
      this.setState({ isOpen: false });
    }, timeoutLength);
  };

  handleClose = () => {
    this.setState({ isOpen: false });
    clearTimeout(this.timeout);
  };

  render() {
    const { tile, currentTerrain } = this.props;
    const { selected, isOpen } = this.state;

    return (
      <Popup
        trigger={
          <div
            className={`Selector ${
              currentTerrain === getTileSprite(tile.props.tile) && selected
                ? `Highlight`
                : null
            }`}
            onClick={this.handleOnClick}
          >
            {tile}
          </div>
        }
        content={getTileSprite(tile.props.tile)}
        position="top center"
        on="hover"
        open={isOpen}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
      />
    );
  }
}
