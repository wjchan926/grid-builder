import React from "react";
import { Button } from "semantic-ui-react";

import "../Gameplay.css";

export function Stat(props) {
  const handleInc = () => {
    const { setStatValue, name, value } = props;

    const stat = Object.assign({});
    stat[name] = parseInt(value) + 1;

    setStatValue(stat);
  };

  const handleDec = () => {
    const {setStatValue, name, value} = props;
    if (value - 1 >= 0) {
      const stat = Object.assign({});
      stat[name] = parseInt(value) - 1;

      setStatValue(stat);
    }
  };

  const renderStatModifier = () => {
    const { hideModifier, hideValue, value } = props;

    if (hideValue) {
      return "";
    }

    if (hideModifier || value === undefined) {
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

  const { stat, showButtons } = props;

  return (
    <span className="Stat">
      {stat}
      {renderStatModifier()}
      {showButtons ? (
        <span>
          <Button
            className="PlusMinus"
            icon="minus circle"
            onClick={handleDec}
          />
          <Button
            className="PlusMinus"
            icon="plus circle"
            onClick={handleInc}
          />
        </span>
      ) : null}
    </span>
  );
}

export default Stat;
