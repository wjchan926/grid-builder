import React, { Component } from "react";
import { connect } from "react-redux";
import InfoPanel from "./InfoPanel/";
import MonsterInfoPanel from "./MonsterInfoPanel/";
import { getSelectedMonster } from "../../../Player/reselect";

export class Gameplay extends Component {
  render() {
    const { selectedMonster } = this.props;

    return (
      <div>
        <div style={{ textAlign: "center" }}>Character Info</div>
        {JSON.stringify(selectedMonster) === "{}" ? (
          <InfoPanel />
        ) : (
          <MonsterInfoPanel />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedMonster: getSelectedMonster(state)
});

export default connect(mapStateToProps)(Gameplay);
