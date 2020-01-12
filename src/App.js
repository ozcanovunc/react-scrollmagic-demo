import React, { Component } from "react";
import $ from "jquery";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {}
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: (xhr, status, err) => {
        console.log(err);
        alert(err);
      }
    });
  }

  render() {
    let { core, resume, portfolio, testimonials } = this.state.resumeData;
    return (
      <div className="App">
        <Header data={core} />
        <About data={core} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Testimonials data={testimonials} />
        <Footer data={core} />
      </div>
    );
  }
}

export default App;
