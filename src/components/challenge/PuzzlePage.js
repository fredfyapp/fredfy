import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

// ********** api ************ //
import db from "../../fixtures/challenges";

// ******** REDUX **********//
import { connect } from "react-redux";
import { setPuzzle, setChallenge } from "../../actions/challenge";

// vm // eval
import vm from "vm";

class PuzzlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenRun: false,
      resultsExpected: [],
      resultsFromUser: []
    };
  }

  loadNext = args => {
    const { name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
    const currentIndex = Object.keys(db[currentChallenges]).indexOf(name);
    const nextPuzzle = Object.keys(db[currentChallenges])[currentIndex + args];
    this.props.setPuzzle(db[currentChallenges][nextPuzzle]);
    this.props.history.push(
      `/challenges-you/${currentChallenges}/${nextPuzzle}`
    );
  };

  componentDidMount = () => {
    const { name } = this.props.currentPuzzle;
    const currentChallenges = this.props.currentChallenges;
    if (name == undefined) {
      const puzzle = this.props.match.params.puzzle;
      const challenges = this.props.match.params.challenges;
      this.props.setPuzzle(db[challenges][puzzle]);
      this.props.setChallenge(challenges);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.userCode) {
      this.evaluateCode(nextProps.userCode);
    }
  };

  evaluateCode = userCode => {
    const { name, solutions, inputs } = this.props.currentPuzzle;
    const solution = `const ${name} = ${solutions} \n`;
    const testInputs = this.props.currentPuzzle.inputs.map(
      test => `${name}${test}`
    );
    let resultsExpected = [];
    let resultsFromUser = [];

    try {
      testInputs.forEach(test => {
        resultsExpected.push(vm.runInNewContext(solution + test, {}));
      });
      testInputs.forEach(test => {
        resultsFromUser.push(vm.runInNewContext(userCode + "\n" + test, {}));
      });
      this.setState({
        hasBeenRun: true,
        resultsExpected,
        resultsFromUser
      });
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
    }
  };

  render() {
    const { challenges, puzzle } = this.props.match.params;
    const { description, code, section } = this.props.currentPuzzle;
    const { hasBeenRun, resultsExpected, resultsFromUser } = this.state;

    const currentIndex = Object.keys(db[challenges]).indexOf(puzzle);

    const hasNext = Object.keys(db[challenges])[currentIndex + 1];
    const hasPrev = Object.keys(db[challenges])[currentIndex - 1];

    console.log(this.state);
    let listResultsFromUser = resultsFromUser.map((res, i) => (
      <li key={i}>{res}</li>
    ));
    let listResultsExpected = resultsExpected.map((res, i) => (
      <li key={i}>{res}</li>
    ));
    // console.log(listResultsExpected);
    let resultsPass = [];
    resultsExpected.forEach((res, i) => {
      console.log(i);
      resultsPass.push(res === resultsFromUser[i]);
    });
    // console.log(resultsPass);

    return (
      <div>
        <h1>Puzzle page</h1>
        <div>
          <h2>
            {challenges}
            {" > "}
            {puzzle}
          </h2>
          <br />
        </div>
        <div>
          <button
            disabled={!hasPrev}
            onClick={() => {
              this.loadNext(-1);
            }}
          >
            prev
          </button>
          <button
            disabled={!hasNext}
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
          <ul>{hasBeenRun && listResultsExpected}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPuzzle: state.challenge.currentPuzzle,
  currentChallenges: state.challenge.currentChallenges,
  userCode: state.challenge.userCode
});

const mapDispatchToProps = dispatch => ({
  setPuzzle: puzzle => dispatch(setPuzzle(puzzle)),
  setChallenge: challenge => dispatch(setChallenge(challenge))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
