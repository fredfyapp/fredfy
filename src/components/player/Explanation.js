// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Explanation = ({ section }) => {
  return (
    <div>

      <h2>Explanation</h2>
      <p>{section.explanation}</p>
    </div>
  );
}

Explanation.propTypes = {
  // : PropTypes.
};

export default Explanation;
