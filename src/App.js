import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

// import ScrollMagic from 'scrollmagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// import { Controller, Scene } from 'react-scrollmagic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  componentDidMount() {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((resumeData) => this.setState({ resumeData }))
      .catch((err) => console.error(err));
  }

  render() {
    let { core, resume, portfolio, testimonials } = this.state.resumeData;

    // const intro = document.querySelector(".intro");
    // const video = intro.querySelector("video");
    // const text = intro.querySelector("h1");
    
    // const controller = new ScrollMagic.Controller();
    // const scene = new ScrollMagic.Scene({
    //   duration: 1000, // video suresi
    //   triggerElement: intro,
    //   triggerHook: 0
    // })

    // scene
    // .addIndicators()
    // .addTo(controller);


    
    return (
 
      <div>
        {/* <Controller>
          <Scene 
            duration={2000}
            triggerElement=".intro"
            indicators={true}
            triggerHook={0}
            pin
            
          >
            <div className="intro">
              <h1>Ozcan Ovunc</h1>
              <video src="./videos/background.mp4"></video>
            </div>
          </Scene>
        </Controller> */}
        <div className="App">
        <Header data={core} />
        <About data={core} />
        <Resume data={resume} />
        <Portfolio data={portfolio} />
        <Testimonials data={testimonials} />
        <Footer data={core} />
      </div>
      </div>
    );




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
