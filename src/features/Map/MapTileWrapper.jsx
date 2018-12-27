import React, { Component } from "react";
import { CONTROL_TYPE } from "../../config/constants";
import "./Map.css";

export class MapTileWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };
  }
  handleOnClick = e => {
    const {
      rowIndex,
      columnIndex,
      controlType,
      selectedTerrain,
      setTile
    } = this.props;

    e.stopPropagation();

    if (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "none") {
      setTile(rowIndex, columnIndex, selectedTerrain);
    }
  };

  handleOver = () => {
    const { controlType, selectedTerrain } = this.props;

    if (controlType === CONTROL_TYPE.MAP && selectedTerrain !== "none") {
      this.setState({ on: true });
    }
  };

  handleLeave = () => {
    this.setState({ on: false });
  };

  render() {
    const { mapTile } = this.props;
    const { on } = this.state;
  
    return (
      <div
        onClick={this.handleOnClick}
        className={`MapTileWrapper ${on ? `MapTileWrapperHover` : ""}`}
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        {mapTile}
      </div>
    );
  }
}

export default MapTileWrapper;
