// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

const Question = (props) => {
  console.log('from question', props.questions);
  return (
    <div>
      <div>Question</div>
      <h3>questionsAnswered: {props.questionsAnswered}</h3>
    </div>
  );
}

Question.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  questionsAnswered: state.playing.questionsAnswered
});

export default connect(mapStateToProps)(Question);
