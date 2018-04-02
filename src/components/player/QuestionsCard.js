// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

const QuestionsCard = ({ shuffledQuestions }) => {
  return (
    <div>
      <div>
        <ProgressBar />
        <Question questions={shuffledQuestions} />
      </div>
    </div>
  );
}

QuestionsCard.propTypes = {
  // : PropTypes.
};

export default QuestionsCard;
