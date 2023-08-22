import React from "react";
import "./Intro.css";
import Pdf from "../images/Diksha_Khade.pdf";

function Intro() {
  return (
    <div className="introdiv" id="home">
      <div className="left-div">
        <p className="introtxt">
          I'm <br /> Diksha Khade
        </p>
        <p className="introtxtp">Frontend Developer |</p>
        <button className="intro-btn">
          <a
            href={Pdf}
            rel="noopener noreferrer"
            style={{ textDecoration: "none ", color: "white" }}
          >
            Resume
          </a>
        </button>
      </div>

      <div className="pic"></div>
    </div>
  );
}

export default Intro;
