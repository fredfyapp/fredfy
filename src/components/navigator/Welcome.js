// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Welcome = ({}) => {
  return (
    <div>
      <h2>Welcome</h2>
      <Link to='/choose-a-world'>
        <h3>Start</h3>
      </Link>
    </div>
  );
}

Welcome.propTypes = {
  // : PropTypes.
};

export default Welcome;
