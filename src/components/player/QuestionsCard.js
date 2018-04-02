// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

class QuestionsCard extends React.Component {

  render() {
    // console.log('card', this);
    return (
      <div>
        <ProgressBar />
        <Question
          questions={this.props.shuffledQuestions}
          {...this.props}
        />
      </div>
    );
  }

}

QuestionsCard.propTypes = {
  // : PropTypes.
};

export default QuestionsCard;
