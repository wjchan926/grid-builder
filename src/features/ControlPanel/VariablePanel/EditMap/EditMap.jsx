import React, { Component } from "react";
import {Form } from "semantic-ui-react";
import TerrainSelector from "./TerrainSelector";

import "../VariablePanel.css";

export class EditMap extends Component {
  render() {
    return (
      <div>
        <div>Map Size</div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input label="Width:" placeholder="Width" fluid />
            <Form.Input label="Height:" placeholder="Height" fluid />
          </Form.Group>
          <Form.Button content="Resize" />
        </Form>
        <div className="Terrain">
          <div>Terrain</div>
          <TerrainSelector />
        </div>
      </div>
    );
  }
}

export default EditMap;
