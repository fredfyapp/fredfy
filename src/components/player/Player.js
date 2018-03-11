// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** ROUTER ********** //
import { Route } from 'react-router-dom';

const Player = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div className='player'>

        <div className='content-container'>
          <Component {...props} />
        </div>

      </div>
    )} />
  );
}

Player.propTypes = {
  // : PropTypes.
};

export default Player;
