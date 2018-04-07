import React from "react";
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

class ChooseAChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challenges: ""
    };
  }

  handleChoseChallenges;

  componentDidMount = () => {
    console.log(this.props.history);
  };

  render() {
    return (
      <div>
        <h3>Challenge Page</h3>
        <div>
          <ListChallenges challenges={db} />
        </div>
      </div>
    );
  }
}

export default ChooseAChallenge;
