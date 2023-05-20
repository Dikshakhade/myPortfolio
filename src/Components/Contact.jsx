import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Let's Chat</h1>
      <p style={{ margin: "20px 0px 20px 0px" }}>Connect with me on...</p>
      <div>
        <a
          href="https://github.com/Dikshakhade"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "3.5%", textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href="https://www.linkedin.com/in/diksha-khade-428175213/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
