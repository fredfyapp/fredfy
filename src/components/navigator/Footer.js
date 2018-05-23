// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <footer id="footer" className="fixed-bottom">
      <div className="logo">
        <Link to="/">
          <h1>Fredfy</h1>
          <h2>
            Learn<br />Code<br />Repeat
          </h2>
        </Link>
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
            <li>Global Ranking</li>
          </Link>
        </ul>
        <ul className="media">
          <li>Made in Dublin/Ireland @ 2018</li>
          <li className="tw social">
            <Link to="http://www.twitter.com" target="_blank">
              Twitter
            </Link>
          </li>
          <li className="gt social">
            <Link to="https://github.com/fredfyapp/fredfy" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
