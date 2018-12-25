import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "./Gameplay.css";

export class Stat extends Component {
  render() {
    const { stat, value, showButtons } = this.props;
    return (
      <span className="Stat">
        {stat}
        {value}
        {showButtons ? (
          <span>
            <Button className="PlusMinus" icon="minus circle" />
            <Button className="PlusMinus" icon="plus " />
          </span>
        ) : null}
      </span>
    );
  }
}

export default Stat;
