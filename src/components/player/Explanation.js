// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Explanation = ({ sectionObject }) => {
  return (
    <div>
      <h4>{sectionObject.explanation}</h4>
    </div>
  );
}

Explanation.propTypes = {
  // : PropTypes.
};

export default Explanation;
