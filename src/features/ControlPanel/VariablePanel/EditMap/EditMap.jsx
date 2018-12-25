import React, { Component } from "react";
import {Form } from "semantic-ui-react";
import TerrainSelector from "./TerrainSelector";

import "./EditMap.css";

export class EditMap extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign:"center"}}>Map Size</div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Width:" placeholder="Width" fluid />
            <Form.Input label="Height:" placeholder="Height" fluid />
          </Form.Group>
          <Form.Button content="Resize" />
        </Form>
        <div className="Terrain">
        <div style={{textAlign:"center"}}>Terrain</div>
          <TerrainSelector />
        </div>
      </div>
    );
  }
}

export default EditMap;
