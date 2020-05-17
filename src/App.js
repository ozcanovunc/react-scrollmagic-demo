import React, { Component } from "react";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    // fetch("public/resumeData.json")
    //   .then((res) => res.json())
    //   .then((resumeData) => this.setState({ resumeData }))
    //   .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <Scroller></Scroller>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
