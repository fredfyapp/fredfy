// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setQuestionAnswered } from '../../actions/playing';

class Question extends React.Component {

  handleQuestionAnswered = () => {

    this.props.setQuestionAnswered(this.props.questionsAnswered + 1);
  }

  render() {
    console.log(this.props.questions);
    return (
      <div>
        <div>Question</div>
        <h3>questionsAnswered: {this.props.questionsAnswered}</h3>
        <button onClick={this.handleQuestionAnswered}>click</button>
      </div>
    );
  }

}

Question.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  questionsAnswered: state.playing.questionsAnswered
});

const mapDispatchToProps = (dispatch) => ({
  setQuestionAnswered: (value) => dispatch(setQuestionAnswered(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
