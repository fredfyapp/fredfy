import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle } from "../../actions/challenge";

class ChallengePage extends React.Component {
  componentDidMount = () => {};

  handleChosenPuzzle = puzzle => {
    const currentChallenges = this.props.ChosenChallenges;
    this.props.setPuzzle(db[currentChallenges][puzzle]);
  };

  render() {
    const currentChallenges = this.props.ChosenChallenges;
    return (
      <div>
        <h1>{currentChallenges}</h1>
        <ul>
          {Object.keys(db[currentChallenges]).map(puzzle => (
            <li>
              <Link
                key={puzzle.toString()}
                to={`/challenges-you/${currentChallenges}/${puzzle}`}
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
