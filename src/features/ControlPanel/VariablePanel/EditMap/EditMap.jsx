import React, { Component } from "react";
import { Form, Button, Input } from "semantic-ui-react";
import TerrainSelector from "./TerrainSelector";
import SelectorTile from "./SelectorTile";
import MapTile from "../../../Map/MapTile";

import "./EditMap.css";

let fileReader;

export class EditMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 25,
      height: 15
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: parseInt(e.target.value) });
  };

  handleResizeMap = () => {
    const { resetPieces, setMapSize } = this.props;
    const { width, height } = this.state;
    if (Number.isInteger(width) && Number.isInteger(height)) {
      setMapSize(width, height);
      resetPieces();
    }
  };

  handleMapImport = () => {
    document.getElementById("selectedFile").click();
  };

  handleImportChange = file => {
    fileReader = new FileReader();
    fileReader.onloadend = this.handleFileRead;
    fileReader.readAsText(file);
  };

  handleFileRead = e => {
    const { setMap } = this.props;
    const map = fileReader.result;
    setMap(map);
    console.log(map);
  };

  handleMapExport = () => {
    const { tiles } = this.props;
    const tileObj = Object.assign({}, { tiles });

    var element = document.createElement("a");
    var file = new Blob([JSON.stringify(tileObj)], {
      type: "application/json"
    });
    element.href = URL.createObjectURL(file);
    element.download = "map.json";
    element.click();
  };

  render() {
    const {
      currentTerrain,
      setSelectedTerrainTile,
      setDefaultTerrain,
      defaultTerrain
    } = this.props;

    return (
      <div>
        <div
          style={{
            textAlign: "center",
            margin: "5px 0 10px"
          }}
        >
          <Form.Group>
            <Input
              type="file"
              id="selectedFile"
              style={{ display: "none" }}
              onChange={e => this.handleImportChange(e.target.files[0])}
            />
            <Input
              type="button"
              id="EditMapButton"
              value="Import"
              onClick={this.handleMapImport}
              className="Import"
            />
            <Button
              content="Export"
              id="EditMapButton"
              onClick={this.handleMapExport}
            />
          </Form.Group>
        </div>
        <div
          className="Terrain"
          style={{
            textAlign: "center",
            marginTop: "10px"
          }}
        >
          <div>Add Terrain</div>
          <TerrainSelector
            setSelectedTerrainTile={setSelectedTerrainTile}
            currentTerrain={currentTerrain}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "10px"
          }}
        >
          <div>Map Size</div>
          <Form style={{ width: "170px", margin: "1px auto 10px auto" }}>
            <Form.Group widths="equal" style={{ marginBottom: "5px" }}>
              <Form.Input
                label="Width:"
                placeholder="Width"
                fluid
                onChange={this.handleChange}
                name="width"
              />
              <Form.Input
                label="Height:"
                placeholder="Height"
                fluid
                onChange={this.handleChange}
                name="height"
              />
            </Form.Group>
            <div className="Terrain" style={{ marginBottom: "5px" }}>
              <div style={{ textAlign: "center" }}>Default Map Tile</div>
              <div className="TerrainRow">
                <SelectorTile
                  tile={<MapTile tile={0} />}
                  setSelectedTerrainTile={setDefaultTerrain}
                  currentTerrain={defaultTerrain}
                />
                <SelectorTile
                  tile={<MapTile tile={1} />}
                  setSelectedTerrainTile={setDefaultTerrain}
                  currentTerrain={defaultTerrain}
                />
                <SelectorTile
                  tile={<MapTile tile={2} />}
                  setSelectedTerrainTile={setDefaultTerrain}
                  currentTerrain={defaultTerrain}
                />
                <SelectorTile
                  tile={<MapTile tile={3} />}
                  setSelectedTerrainTile={setDefaultTerrain}
                  currentTerrain={defaultTerrain}
                />
              </div>
            </div>
            <Form.Button
              id="EditMapButton"
              content="Resize Map"
              onClick={this.handleResizeMap}
            />
          </Form>
        </div>
      </div>
    );
  }
}
