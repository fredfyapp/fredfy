// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

const ProgressBar = props => {
  return (
    <div>
      <h2>ProgressBar</h2>
      <h3>{props.questionsAnswered}</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  questionsAnswered: state.playing.questionsAnswered
});

export default connect(mapStateToProps)(ProgressBar);
