import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setChallenge, setCurrentWorkout } from "../../actions/challenge";

class ChooseAChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      challenges: [],
      click: 0,
    };
  }

  handleChosenChallenges = challenges => {
    console.log(challenges);
    const chalRef = database.ref(`challenges/${challenges}`);
    chalRef.once("value", s => {
      console.log(s.val());
      this.props.setCurrentWorkout(Object.values(s.val()));
    });
    this.props.setChallenge(challenges);
  };

  componentDidMount = () => {
    const challenges = database.ref("challenges/titles/");

    challenges.once("value", s => {
      this.setState({
        challenges: s.val(),
      });
    });
  };

  render() {
    const { challenges } = this.state;

    return (
      <div>
        <h3>Choose a Challenge</h3>
        <div>
          <ul>
            {challenges[0] ? (
              challenges.map(challenge => (
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
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setChallenge: challenges => dispatch(setChallenge(challenges)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
});

export default connect(null, mapDispatchToProps)(ChooseAChallenge);
