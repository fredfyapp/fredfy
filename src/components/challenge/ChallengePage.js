// ********** REACT ********** //
import React from "react";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";

class ChallengePage extends React.Component {
  componentDidMount = () => {
    console.log(this.props.ChosenChallenges);
  };

  render() {
    return (
      <div>
        <h2>ChallengePage</h2>
        <h1>test</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ChosenChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
