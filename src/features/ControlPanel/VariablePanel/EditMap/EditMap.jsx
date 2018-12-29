import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import TerrainSelector from "./TerrainSelector";

import "./EditMap.css";

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

  render() {
    const { setMapSize } = this.props;
    const { width, height } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Map Size</div>
        <Form style={{ width: "170px", margin: "2px auto 10px auto" }}>
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
          <Form.Button
            id="EditMapButton"
            content="Resize Map"
            onClick={() => {
              if (Number.isInteger(width) && Number.isInteger(height)) {
                setMapSize(width, height);
              }
            }}
          />
        </Form>
        <div className="Terrain">
          <div style={{ textAlign: "center" }}>Terrain</div>
          <TerrainSelector />
        </div>
      </div>
    );
  }
}
