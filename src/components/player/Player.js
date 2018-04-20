// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const Player = ({ component: Component, database, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div className='player'>

        <div className='content-container'>
          <Component {...props} database={database} />
        </div>

      </div>
    )} />
  );
}

Player.propTypes = {
  // : PropTypes.
};

export default Player;
