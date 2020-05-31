import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faInstagram,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icon-container">
          <a className="footer-icon-wrapper" target="_blank">
            <FontAwesomeIcon className="footer-icon" icon={faGithub} size="2x" />
          </a>
          <a className="footer-icon-wrapper" target="_blank">
            <FontAwesomeIcon className="footer-icon" icon={faLinkedin} size="2x" />
            </a>
          <a className="footer-icon-wrapper" target="_blank">
            <FontAwesomeIcon className="footer-icon" icon={faMedium} size="2x" />
            </a>
          <a className="footer-icon-wrapper" target="_blank">
            <FontAwesomeIcon className="footer-icon" icon={faInstagram} size="2x" />
            </a>
          <a className="footer-icon-wrapper" target="_blank">
            <FontAwesomeIcon className="footer-icon" icon={faTelegramPlane} size="2x" />
            </a>
        </div>
        {/* <div className="footer-title">
          {"Copyright © "}{username} {new Date().getFullYear()}
        </div> */}
      </div>
    );
  }
}
