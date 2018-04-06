// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

const Header = ({}) => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo navbar-brand">
        <Link to="/">
          <h1>Fredfy</h1>
          <h2>Learn_</h2>
        </Link>
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
          <li className="nav-item active">Sign Up</li>
          <li>Sign In</li>
          <li>Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
