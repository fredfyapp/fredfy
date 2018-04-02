// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import Modal from '../Modal';
import ProgressBar from './ProgressBar';
import Question from './Question';

// ********** ACTIONS ********** //
import { setQuestionsAnswered } from '../../actions/playing';

class QuestionsCard extends React.Component {

  handleQuestionsAnswered = () => {

    this.props.setQuestionsAnswered(this.props.questionsAnswered + 1);
  }

  render() {
    return (
      <div>
        <ProgressBar />
        <Question questions={this.props.shuffledQuestions} />
        <button onClick={this.handleQuestionsAnswered}>click</button>
      </div>
    );
  }

}

QuestionsCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  questionsAnswered: state.playing.questionsAnswered
});

const mapDispatchToProps = (dispatch) => ({
  setQuestionsAnswered: (value) => dispatch(setQuestionsAnswered(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsCard);
