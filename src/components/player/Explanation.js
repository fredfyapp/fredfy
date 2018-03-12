// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Explanation = ({ section = {}, challenge = {} }) => {
  return (
    <div>

      <h2>Explanation</h2>
      {section.explanation && <p>section.explanation</p>}
      {challenge.challengeTitle && <h2>{challenge.challengeTitle}</h2>}
      {challenge.challengeExplanation && <h2>{challenge.challengeExplanation}</h2>}
    </div>
  );
}

Explanation.propTypes = {
  // : PropTypes.
};

export default Explanation;
