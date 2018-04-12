import React, { Component } from "react";
import Editor from "./Editor";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle } from "../../actions/challenge";

class PuzzlePage extends Component {
  loadNext = args => {
    const { name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
    const currentIndex = Object.keys(db[currentChallenges]).indexOf(name);
    console.log(args);

    const nextPuzzle = Object.keys(db[currentChallenges])[currentIndex + args];
    console.log(nextPuzzle);
  };

  render() {
    const { description, code, section, name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPuzzle: state.challenge.currentPuzzle,
  currentChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
