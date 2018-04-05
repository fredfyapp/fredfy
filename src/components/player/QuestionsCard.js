// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

class QuestionsCard extends React.Component {

  render() {
    const subjectName = this.props.match.params.subject;
    return (
      <div>
        <ProgressBar />
        <Question
          questions={this.props.shuffledQuestions}
          subjectName={subjectName}
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
