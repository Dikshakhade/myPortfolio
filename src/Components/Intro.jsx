import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="introdiv" id="home">
      <div className="left-div">
        <p className="introtxt">
          I'm <br /> Diksha Khade
        </p>
        <p className="introtxtp">Full Stack Developer |</p>
      </div>
      <div className="pic">{/* <img src={icon} alt="icon" /> */}</div>
    </div>
  );
}

export default Intro;
