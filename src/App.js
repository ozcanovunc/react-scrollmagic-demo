import React, { Component } from "react";
import Scroller from "./Components/Scroller";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    fetch("public/resumeData.json")
      .then((res) => res.json())
      .then((resumeData) => this.setState({ resumeData }))
      .catch((err) => console.error(err));
  }

  render() {
    return <Scroller></Scroller>;
  }
}

export default App;
