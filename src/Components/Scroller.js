import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';

export default class Scroller extends Component {
  constructor(props) {
    super(props);
    this.updateScene = this.updateScene.bind(this);
    this.controller = new ScrollMagic.Controller();
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      duration: 4000, // Time of video
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
        id="#intro"
        className="scroller-base">
        <div className="scroller-title">
          Ozcan Ovunc
        </div>
        <video
          className="scroller-video"
          ref={(e) => this.videoRef = e}
          src="/src/assets/videos/background.mp4"
        />
      </div>
    );
  }
}
