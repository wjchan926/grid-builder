import React, { Component } from "react";
import { Button, Input, Form } from "semantic-ui-react";

import "../Gameplay.css";

export class InputStat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (JSON.stringify(props.value) !== JSON.stringify(state.value)) {
      return { value: props.value };
    }
    return null;
  }

  handleInc = () => {
    const { setStatValue, name } = this.props;
    const { value } = this.state;

    const stat = Object.assign({});
    stat[name] = parseInt(value) + 1;

    setStatValue(stat);
    this.setState({ value: parseInt(value) + 1 });
  };

  handleDec = () => {
    const { setStatValue, name } = this.props;
    const { value } = this.state;

    if (value - 1 >= 0) {
      const stat = Object.assign({});
      stat[name] = parseInt(value) - 1;

      setStatValue(stat);
      this.setState({ value: parseInt(value) - 1 });
    }
  };

  handleTextChange = e => {
    const { setStatValue } = this.props;

    const stat = Object.assign({});
    stat[e.target.name] = e.target.value;

    setStatValue(stat);
  };

  render() {
    const { stat, showButtons, name } = this.props;
    const { value } = this.state;

    return (
      <span className="Stat" style={{ display: "flex" }}>
        <label>{stat}</label>
        <Input
          style={{
            height: "25px",
            marginLeft: "5px",
            maxWidth: "100px"
          }}
          placeholder="0"
          value={value}
          name={name}
          onChange={this.handleTextChange}
        />
        {showButtons ? (
          <div style={{ marginLeft: "auto" }}>
            <span>
              <Button
                className="PlusMinus"
                icon="minus circle"
                onClick={this.handleDec}
              />
              <Button
                className="PlusMinus"
                icon="plus circle"
                onClick={this.handleInc}
              />
            </span>
          </div>
        ) : null}
      </span>
    );
  }
}

export default InputStat;
