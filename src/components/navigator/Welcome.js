// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div id="home" className="block-content">
      <h2>Welcome to Fredfy</h2>
      <div className="content">
        <Link to="/choose-a-world">
          <h3 className="btn btn-outline-primary btn-lg">Start a game</h3>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
