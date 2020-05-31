import React, { Component } from "react";
import Scroller from "./components/Scroller";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  render() {
    return (
      <div>
        <Scroller></Scroller>
      </div>
    );
  }
}

export default App;
