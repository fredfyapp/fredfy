import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentPuzzle,
  setChallenge,
  setPuzzles
} from "../../actions/challenge";

class ChallengePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount = () => {
    const { challenges } = this.props.match.params;
    const { currentChallenges, setPuzzles, setChallenge } = this.props;

    const puzzles = database.ref(`challenges/${currentChallenges}`);
    puzzles.on("value", snapshot => {
      setPuzzles(Object.values(snapshot.val()));
      this.setState({
        isLoading: false
      });
    });
  };

  handleChosenPuzzle = (puzzle, i) => {
    const currentChallenges = this.props.currentChallenges;
    const currentPuzzle = Object.values(this.props.puzzles[i][puzzle])[0];

    this.props.setCurrentPuzzle(currentPuzzle);
  };

  render() {
    const puzzles = Object.values(this.props.puzzles).map(puzzle =>
      Object.keys(puzzle)
    );
    const { challenges } = this.props.match.params;

    return (
      <div>
        <span>{challenges}</span>
        <ul>
          {puzzles[0] ? (
            puzzles.map((puzzle, i) => (
              <li key={i}>
                <Link
                  key={i}
                  to={`/challenges-you/${challenges}/${puzzle}`}
                  onClick={() => {
                    this.handleChosenPuzzle(puzzle, i);
                  }}
                >
                  {puzzle}
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
  puzzles: state.challenge.puzzles
});
const mapDispatchToProps = dispatch => ({
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setPuzzles: puzzles => dispatch(setPuzzles(puzzles)),
  setChallenge: challenge => dispatch(setChallenge(challenge))
});
export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
