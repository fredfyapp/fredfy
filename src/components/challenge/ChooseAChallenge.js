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
      <div className="container">
        <p className="h1">Choose a Course</p>
        <div className="">
          <ul className="">
            {challenges[0] ? (
              challenges.map(challenge => (
                <li
                  className="card"
                  style={{ width: "12rem" }}
                  key={challenge.toString()}
                >
                  <Link
                    className="card-body"
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
