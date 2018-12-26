import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from "semantic-ui-react";
import TerrainSelector from "./TerrainSelector";

import "./EditMap.css";

import { setMapSize } from "./actions";

export class EditMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 25,
      height: 15
    };
  }

  handleWidthChange = e => {
    this.setState({ width: parseInt(e.target.value) });
  };

  handleHeightChange = e => {
    this.setState({ height: parseInt(e.target.value) });
  };

  render() {
    const { setMapSize } = this.props;
    const { width, height } = this.state;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Map Size</div>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              label="Width:"
              placeholder="Width"
              fluid
              onChange={this.handleWidthChange}
            />
            <Form.Input
              label="Height:"
              placeholder="Height"
              fluid
              onChange={this.handleHeightChange}
            />
          </Form.Group>
          <Form.Button content="Resize" onClick={()=>{setMapSize(width, height)}} />
        </Form>
        <div className="Terrain">
          <div style={{ textAlign: "center" }}>Terrain</div>
          <TerrainSelector />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
  setMapSize
});

export default connect(
  null,
  mapDispatchToProps
)(EditMap);
