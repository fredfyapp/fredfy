// ********** REACT ********** //
import React from "react";
import { Route } from "react-router-dom";

const Player = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props => (
        <div className="player">
          <div className="content-container">
            <Component {...props} />
          </div>
        </div>
      )}
    />
  );
};

export default Player;
