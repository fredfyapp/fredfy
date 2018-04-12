import React from "react";
import { Link } from "react-router-dom";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle, setChallenge } from "../../actions/challenge";

class ChallengePage extends React.Component {
  componentDidMount = () => {
    if (this.props.ChosenChallenges) {
      this.props.setChallenge(this.props.match.params.challenges);
      this.forceUpdate();
    }
  };

  handleChosenPuzzle = puzzle => {
    const currentChallenges = this.props.currentChallenges;
    this.props.setPuzzle(db[currentChallenges][puzzle]);
  };

  render() {
    const currentChallenges = this.props.currentChallenges
      ? this.props.currentChallenges
      : this.props.match.params.challenges;
    const listOfPuzzles = Object.keys(
      db[currentChallenges]
    ).map((puzzle, i) => (
      <li key={puzzle.toString()}>
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
    ));
    return (
      <div>
        <h1>{currentChallenges}</h1>
        {listOfPuzzles}
        <ul />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = dispatch => ({
  setPuzzle: puzzle => dispatch(setPuzzle(puzzle)),
  setChallenge: challenge => dispatch(setChallenge(challenge))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengePage);
