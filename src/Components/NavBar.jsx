import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    text: "home",
    url: "#home",
  },
  {
    id: 2,
    text: "project",
    url: "#project",
  },
  {
    id: 3,
    text: "achievement",
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
    const element = document.querySelector(target).offsetTop;
    console.log(target);
    console.log(element);
    window.scrollTo({
      left: 0,
      top: element,
    });
  };
  const [showLinks, setshowLinks] = useState(false);
  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        className="button"
        style={{ color: "white", margin: "20px", cursor: "pointer" }}
        onClick={() => {
          setshowLinks(!showLinks);
        }}
      />
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
