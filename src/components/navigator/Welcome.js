// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Welcome = ({}) => {
  return (
    <div id="home" className="block-content container">
      <div className="row stars">
        <div className="col-md-4 space-home">
          <div className="hi-fred"> </div>
        </div>
        <div className="col-md-8 welcome">
          <h2>Welcome to Fredfy</h2>
          <p>Learn a programming language in an adventure game.</p>
          <div className="content">
            <h3 className="btn start-game">
              <Link to="/choose-a-world">Start a game</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  // : PropTypes.
};

export default Welcome;
