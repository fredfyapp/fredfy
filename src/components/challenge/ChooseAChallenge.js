import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setChallenge } from "../../actions/challenge";

class ChooseAChallenge extends React.Component {
  handleChosenChallenges = challenges => {
    this.props.setChallenge(challenges);
  };

  componentDidMount = () => {};

  render() {
    const listOfChallenges = Object.keys(db).map(challenge => (
      <li key={challenge.toString()}>
        <Link
          key={challenge.toString()}
          to={`/challenges-you/${challenge}`}
          onClick={() => {
            this.handleChosenChallenges(challenge);
          }}
        >
          {challenge}
        </Link>
      </li>
    ));

    return (
      <div>
        <h3>Choose a Challenge</h3>
        <div>
          <ul>{listOfChallenges}</ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setChallenge: challenges => dispatch(setChallenge(challenges))
});

export default connect(null, mapDispatchToProps)(ChooseAChallenge);