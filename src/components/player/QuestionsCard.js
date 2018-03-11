// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

const QuestionsCard = ({}) => {
  return (
    <div>
      <h2>QuestionsCard</h2>
      <div>
        <ProgressBar />
        <Question />
      </div>
    </div>
  );
}

QuestionsCard.propTypes = {
  // : PropTypes.
};

export default QuestionsCard;
