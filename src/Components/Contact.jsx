import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div>
        <h1 style={{ color: "#8276e3", marginBottom: "4vh" }}>Let's Chat</h1>

        <div className="contact-icon">
          <a
            href="https://github.com/Dikshakhade"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " #9f99d8" }}
          >
            <FontAwesomeIcon className="s-icon" icon={faGithub} size="3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/diksha-khade-428175213/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: " #9f99d8" }}
          >
            <FontAwesomeIcon className="s-icon" icon={faLinkedin} size="3x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
