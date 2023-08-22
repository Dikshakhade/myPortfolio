import React, { useState } from "react";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    text: "home",
    url: "#home",
  },
  {
    id: 2,
    text: "projects",
    url: "#project",
  },
  {
    id: 3,
    text: "certificates",
    url: "#achievement",
  },
  {
    id: 4,
    text: "contact",
    url: "#contact",
  },
];

function NavBar() {
  const handleClick = (e) => {
    e.preventDefault();
    // e.target.style.color = "black";
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target).offsetTop - 100;

    window.scrollTo({
      left: 0,
      top: element,
    });
  };
  const [showLinks, setshowLinks] = useState(false);
  return (
    <>
      {showLinks ? (
        <FontAwesomeIcon
          icon={faXmark}
          className="button"
          style={{ color: "#9f99d8", margin: "20px", cursor: "pointer" }}
          onClick={() => {
            setshowLinks(!showLinks);
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="button"
          style={{ color: "#9f99d8", margin: "20px", cursor: "pointer" }}
          onClick={() => {
            setshowLinks(!showLinks);
          }}
        />
      )}
      <div className="nav-wrap" id={showLinks ? "hidden" : ""}>
        <ul className="nav-content">
          {links.map((link) => {
            return (
              <li>
                <a href={link.url} key={link.id} onClick={handleClick}>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
