import React from 'react';
import { connect } from 'react-redux';
import MCQ from './MCQ';
import { startAddQuestion } from '../../actions/questions';

export class AddQuestion extends React.Component {
  onSubmit = (question) => {
    this.props.startAddQuestion(question);
  };

  render() {
    return (
      <div>
        <MCQ onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddQuestion: (question) => dispatch(startAddQuestion(question))
});

export default connect(undefined, mapDispatchToProps)(AddQuestion);
