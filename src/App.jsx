import React, { Component } from "react";
import World from "./features/World";
import ControlPanel from "./features/ControlPanel";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <World/>
        <ControlPanel/>
      </div>
    );
  }
}

export default App;
