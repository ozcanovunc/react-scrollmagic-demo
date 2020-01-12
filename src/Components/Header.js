import React, { Component } from "react";

class Header extends Component {
  render() {
    let { name, occupation, social = [] } = this.props.data || {};
    let networks = social.map(({ name, url, className }) => (
      <li key={name}>
        <a href={url}>
          <i className={className}></i>
        </a>
      </li>
    ));

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>
              <span>{occupation}</span>
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        {/*
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i class="fas fa-arrow-down"></i>
          </a>
        </p>
        */}
      </header>
    );
  }
}

export default Header;
