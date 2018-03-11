// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import WorldCard from './WorldCard';

const ChooseAWorld = ({}) => {
  return (
    <div>
      <h2>ChooseAWorld</h2>
      <div>
        <WorldCard />
        <WorldCard />
        <WorldCard />
      </div>
    </div>
  );
}

ChooseAWorld.propTypes = {
  // : PropTypes.
};

export default ChooseAWorld;
