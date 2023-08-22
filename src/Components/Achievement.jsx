import React from "react";
import "./ach.css";
function Achievement() {
  return (
    <div id="achievement">
      <h1 id="ach-h1">Certificates</h1>
      <div className="ach-wrap">
        <a
          href="https://www.hackerrank.com/certificates/6918eb2567a0"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="ach-certi" id="cert1"></div>
        </a>

        <a
          href="https://www.hackerrank.com/certificates/4da9309d885b"
          style={{ textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="ach-certi" id="cert2"></div>
        </a>
      </div>
    </div>
  );
}

export default Achievement;
