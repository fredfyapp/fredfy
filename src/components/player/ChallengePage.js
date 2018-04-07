// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";

const ListChallenges = props => {
  const challenges = Object.keys(props.challenges);
  const listItems = challenges.map(challenge => (
    <Link key={challenge.toString()} to={`/challenges-you/${challenge}`} onClick={() => {}}>
      <li key={challenge.toString()}>{challenge}</li>
    </Link>
  ));
  return <ul>{listItems}</ul>;
};

class ChallengePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challenges: {}
    };
  }

  handleChosenChallenges = () => {};

  componentDidMount = () => {
    console.log(this.props.history);
  };

  render() {
    return (
      <div>
        <h2>ChallengePage</h2>
        <div />
      </div>
    );
  }
}

ChallengePage.propTypes = {
  // : PropTypes.
};

export default ChallengePage;
