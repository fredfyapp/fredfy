import React from 'react';
import { connect } from 'react-redux';
import MCQ from './MCQ';
import { startAddQuestionMCQ } from '../../actions/questions';

export class AddQuestion extends React.Component {
  onSubmitMCQ = (questionMCQ) => {
    this.props.startAddQuestionMCQ(questionMCQ);
  };

  render() {
    return (
      <div>
        <MCQ onSubmit={this.onSubmitMCQ}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddQuestionMCQ: (questionMCQ) => dispatch(startAddQuestionMCQ(questionMCQ))
});

export default connect(undefined, mapDispatchToProps)(AddQuestion);
