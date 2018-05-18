// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light">
      <div className="logo navbar-brand">
        <h1>
          <Link to="/">Fredfy </Link>
        </h1>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/">CONNECT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  // : PropTypes.
};

export default Header;
