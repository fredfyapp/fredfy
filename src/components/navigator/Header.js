// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({}) => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo navbar-brand">
        <h1>Fredfy</h1>
        <h2>Learn_</h2>
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
          <li>Profileeeee</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  // : PropTypes.
};

export default Header;
