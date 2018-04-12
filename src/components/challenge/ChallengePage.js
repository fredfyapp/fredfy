import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle } from "../../actions/challenge";

class ChallengePage extends React.Component {
  componentDidMount = () => {
    console.log(Object.keys(db["warmup-1"]));
  };

  handleChosenPuzzle = puzzle => {
    const currentChallenge = this.props.ChosenChallenges;
    this.props.setPuzzle(db[currentChallenge][puzzle]);
  };

  render() {
    const currentChallenge = this.props.ChosenChallenges;
    return (
      <div>
        <h1>{currentChallenge}</h1>
        <ul>
          {Object.keys(db[currentChallenge]).map(puzzle => (
            <li>
              <Link
                key={puzzle.toString()}
                to={`/challenges-you/${currentChallenge}/${puzzle}`}
                onClick={() => {
                  this.handleChosenPuzzle(puzzle);
                }}
              >
                {puzzle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ChosenChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = dispatch => ({
  setPuzzle: puzzle => dispatch(setPuzzle(puzzle))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
