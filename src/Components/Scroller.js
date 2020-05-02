import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
//import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

export default class Scroller extends Component {
  constructor(props) {
    super(props);
    this.updateScene = this.updateScene.bind(this);
    this.controller = new ScrollMagic.Controller();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    new ScrollMagic.Scene({
        duration: 6000, // Time of video
        triggerElement: this.triggerRef,
        triggerHook: 0
      })
      .setPin(this.triggerRef)
      .on("update", this.updateScene)
      .addTo(this.controller);
  }

  updateScene(e) {
    const video = this.videoRef;
    const pos = e.scrollPos / 1000;
    video.currentTime = pos;
  }

  render() {
      return (
        <div 
            ref={(e) => this.triggerRef = e}
            id="#intro">
            <h1>Ozcan Ovunc</h1>
            <video
                ref={(e) => this.videoRef = e}
                src="/src/assets/videos/background.mp4"
            />
        </div>    
      );
  }
}
