import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "../Gameplay.css";

export class Stat extends Component {
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

  renderStatModifier = () => {
    const { value } = this.state;
    const { hideModifier, hideValue } = this.props;

    if (hideValue) {
      return "";
    }

    if (hideModifier) {
      return <span style={{ color: "gold" }}>{value}</span>;
    }

    return (
      <span style={{ color: "gold" }}>
        {value}
        <span style={{ color: "blue" }}>{` (${Math.trunc(
          (value - 10) / 2
        )})`}</span>
      </span>
    );
  };

  render() {
    const { stat, showButtons } = this.props;

    return (
      <span className="Stat">
        {stat}
        {this.renderStatModifier()}
        {showButtons ? (
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
        ) : null}
      </span>
    );
  }
}

export default Stat;
