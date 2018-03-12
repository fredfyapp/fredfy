// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

const QuestionsCard = ({ database }) => {
  const question = database.learning[0].sections[0].questions[0];
  return (
    <div>
      <h2>QuestionsCard</h2>
      <div>
        {console.log(database.learning[0].sections[0].questions[0])}
        <ProgressBar />
        <Question question={question} />
      </div>
    </div>
  );
}

QuestionsCard.propTypes = {
  // : PropTypes.
};

export default QuestionsCard;
