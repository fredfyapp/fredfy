import React, { Component } from "react";
import Editor from "./Editor";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle, setChallenge } from "../../actions/challenge";

class PuzzlePage extends Component {
  loadNext = args => {
    const { name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
    const currentIndex = Object.keys(db[currentChallenges]).indexOf(name);
    const nextPuzzle = Object.keys(db[currentChallenges])[currentIndex + args];
    console.log(currentIndex);
    console.log(nextPuzzle);
    this.props.setPuzzle(db[currentChallenges][nextPuzzle]);
  };
  componentDidMount = () => {
    const { name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
    if (name == undefined) {
      const puzzle = this.props.match.params.puzzle;
      const challenges = this.props.match.params.challenges;
      this.props.setPuzzle(db[challenges][puzzle]);
      this.props.setChallenge(challenges);
      this.forceUpdate();
    }
  };

  render() {
    const { description, code, section } = this.props.currentPuzzle;
    const name = this.props.match.params.puzzle;
    const currentChallenges = this.props.match.params.challenges;
    const currentIndex = Object.keys(db[currentChallenges]).indexOf(name);

    // TODO
    // has next and hasPrev to grey out buttons

    return (
      <div>
        <h1>Puzzle page</h1>
        <div>
          <h2>
            {currentChallenges}
            {" > "}
            {name}
          </h2>
          <br />
        </div>
        <div>
          <button
            onClick={() => {
              this.loadNext(-1);
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              this.loadNext(1);
            }}
          >
            next
          </button>
        </div>
        <div>
          <span>{description}</span>
        </div>
        <div>
          <Editor code={code} />
        </div>
        <div>
          <button>Run code</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPuzzle: state.challenge.currentPuzzle,
  currentChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = dispatch => ({
  setPuzzle: puzzle => dispatch(setPuzzle(puzzle)),
  setChallenge: challenge => dispatch(setChallenge(challenge))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
