import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentPuzzle,
  setChallenge,
  setCurrentWorkout,
} from "../../actions/challenge";

class ChallengePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = () => {
    const { challenges } = this.props.match.params;
    const { currentChallenges, setCurrentWorkout, setChallenge } = this.props;

    database.ref(`challenges/${challenges}`).on("value", s => {
      setCurrentWorkout(Object.values(s.val()));
    });
  };

  handleChosenPuzzle = (puzzle, i) => {
    const currentChallenges = this.props.currentChallenges;

    this.props.setCurrentPuzzle(puzzle);
  };

  render() {
    const { challenges } = this.props.match.params;
    const { currentWorkout } = this.props;

    return (
      <div>
        <span>{challenges}</span>
        <ul>
          {currentWorkout[0] ? (
            currentWorkout.map((puzzle, i) => (
              <li key={i}>
                <Link
                  key={i}
                  to={`/challenges-you/${challenges}/${puzzle.name}`}
                  onClick={() => {
                    this.handleChosenPuzzle(puzzle);
                  }}
                >
                  {puzzle.name}
                </Link>
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  currentChallenges: state.challenge.currentChallenges,
  currentWorkout: state.challenge.currentWorkout,
});
const mapDispatchToProps = dispatch => ({
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
  setChallenge: challenge => dispatch(setChallenge(challenge)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
