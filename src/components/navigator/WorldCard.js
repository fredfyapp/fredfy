// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const WorldCard = (props) => {
  return (
    <div>
      <h2>{props.subject.subject}</h2>
    </div>
  );
}

WorldCard.propTypes = {
  // : PropTypes.
};

export default WorldCard;
