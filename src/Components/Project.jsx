import React from "react";
import "./project.css";
import clg from "../images/clg_web.png";
import book from "../images/book.png";
function Project() {
  return (
    <div className="container-pro" id="project">
      <h1>Projects</h1>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            <h2>Home Automation System </h2>
            <p>Mar 2023 - Apr 2023</p>
            <div>
              A home automation system where you can control home appliances
              using web app <br />
            </div>
          </div>
          <div className="projimg">this is image you have to click here</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            <a
              href="https://book-all-dotcom.vercel.app/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>Booking System</h2>
            </a>
            <p>Mar 2023 - Apr 2023</p>
            <div>
              An event booking system build using various web technologies{" "}
              <br />
              HTML, CSS, JavaScript, React.Js, Redux, MongoDB, Node.Js
            </div>
          </div>
          <a
            className="projimg"
            href=" https://book-all-dotcom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={book} alt="booking" />
          </a>
        </div>
      </div>
      <div className="wrapper">
        <div className="project1">
          <div className="description">
            <a
              href="https://dikshakhade.github.io/landing.github.io/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <h2>College Langing Page</h2>
            </a>
            <p> Nov 2022 - Dec 2022</p>
            <div>
              This is a Landing page build using HTML/CSS and JavaScript <br />
            </div>
          </div>
          <a
            className="projimg"
            href="https://dikshakhade.github.io/landing.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={clg} alt="clg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
