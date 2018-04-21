import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentWorkout,
  setCurrentPuzzle,
  setChallenge,
} from "../../actions/challenge";

class ChooseAChallenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzles: [],
    };
  }

  handleChosenPuzzle = puzzle => {
    this.props.setCurrentPuzzle(puzzle);
    this.props.setChallenge(puzzle.section);
  };

  componentDidMount = () => {
    const { userId } = this.props;
    const userRef = database.ref(`users/${userId}/`);
    this.setState({
      puzzles: this.props.currentWorkout,
    });
  };

  render() {
    const { puzzles } = this.state;

    return (
      <div>
        <h3>Review this</h3>
        <div>
          <ul>
            {puzzles[0] ? (
              puzzles.map((p, i) => (
                <li key={i}>
                  <Link
                    key={i}
                    to={`/challenges-you/${p.section}/${p.name}`}
                    onClick={() => {
                      this.handleChosenPuzzle(p);
                    }}
                  >
                    {p.name}
                  </Link>
                </li>
              ))
            ) : (
              <p>nothing to review</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userId: state.user.userId,
  currentWorkout: state.challenge.currentWorkout,
});

const mapDispatchToProps = dispatch => ({
  setChallenge: challenges => dispatch(setChallenge(challenges)),
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAChallenge);
