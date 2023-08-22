import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-div">
      <div className="about-des">
        <h1>Skills</h1>
      </div>
      <div className="about-icon">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          width="100"
          height="100"
          alt="html"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          width="100"
          height="100"
          alt="css"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          width="100"
          height="100"
          alt="js"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="100"
          height="100"
          alt="react"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          width="100"
          height="100"
          alt="redux"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          width="100"
          height="100"
          alt="mdb"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          width="100"
          height="100"
          alt="node"
        />
      </div>
    </div>
  );
}

export default About;
