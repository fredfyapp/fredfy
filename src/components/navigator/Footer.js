// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <footer id="footer">
      <div className="logo">
        <h1>Fredfy</h1>
        <h2>
          Learn<br />Code<br />Repeat
        </h2>
      </div>
      <div className="links">
        <ul className="pages">
          <Link to="/how-it-works">
            <li>How works Fredfy?</li>
          </Link>
          <Link to="/our-team">
            <li>Our Team</li>
          </Link>
          <Link to="/ranking">
            <li>Ranking</li>
          </Link>
        </ul>
        <ul className="media">
          <li>Made in Dublin/Ireland @ 2018</li>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
