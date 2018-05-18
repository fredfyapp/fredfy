// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({}) => {
  return (
    <footer id="footer">
      <div className="logo">
        <h1>
          <Link to="/">Fredfy</Link>
        </h1>
      </div>
      <div className="links">
        <p>
          <Link to="/how-it-works">How works Fredfy?</Link>{" "}
          <Link to="/our-team">Our Team</Link>{" "}
          <Link to="/ranking">Ranking</Link> |
          <Link to="https://github.com/fredfyapp/fredfy" target="_blank">
            Code on GITHUB
          </Link>
          <Link to="https://invis.io/FWJ21Y99EMT" target="_blank">
            Prototype on INVISION
          </Link>
          | Made in Dublin/Ireland @ 2018
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // : PropTypes.
};

export default Footer;
