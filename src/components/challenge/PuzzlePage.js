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

// fs

class PuzzlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenRun: false,
      resultsExpected: [],
      resultsFromUser: [],
      hasNext: "",
      hasPrev: ""
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
    const { challenges, puzzle } = this.props.match.params;
    const currentChallenges = this.props.currentChallenges;
    const currentIndex = Object.keys(db[challenges]).indexOf(puzzle);
    this.setState({
      hasNext: Object.keys(db[challenges])[currentIndex + 1],
      hasPrev: Object.keys(db[challenges])[currentIndex - 1]
    });
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
    let resultsExpected = [];
    let resultsFromUser = [];

    console.log("before try");
    try {
      inputs.forEach(test => {
        resultsExpected.push(vm.runInNewContext(solutions + "\n" + test, {}));
      });
      console.log("before running");
      inputs.forEach(test => {
        resultsFromUser.push(vm.runInNewContext(userCode + "\n" + test, {}));
      });
      console.log(resultsFromUser[0]);
      this.setState({
        hasBeenRun: true,
        resultsExpected,
        resultsFromUser
      });
      console.log("set state");
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
    }
  };

  render() {
    const { challenges, puzzle } = this.props.match.params;
    const { description, code, section } = this.props.currentPuzzle;
    const {
      hasBeenRun,
      resultsExpected,
      resultsFromUser,
      hasNext,
      hasPrev
    } = this.state;
    let compareResults = [];
    if (hasBeenRun) {
      resultsExpected.forEach((res, i) => {
        if (res === resultsFromUser[i]) {
          compareResults.push("Pass");
        } else {
          compareResults.push("----");
        }
      });
    }
    return (
      <div>
        <h1>Puzzle page</h1>
        <div>
          <h2>
            {challenges}
            {" => "}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Editor code={code} />
          <ListResults
            resultsExpected={resultsExpected}
            resultsFromUser={resultsFromUser}
            compareResults={compareResults}
          />
        </div>
      </div>
    );
  }
}

const ListResults = props => (
  <div style={{ display: "flex" }}>
    <div>
      <span>Expected</span>
      <ul>
        {props.resultsExpected[0] === undefined ? (
          props.resultsFromUser.map((res, i) => {
            return <li key={i}>Wrong solution or Test inputs</li>;
          })
        ) : (
          props.resultsExpected.map((res, i) => {
            return <li key={i}>{res.toString()}</li>;
          })
        )}
      </ul>
    </div>
    <div>
      <ul>
        <span>Run</span>
        {props.resultsFromUser[0] === undefined ? (
          props.resultsFromUser.map((res, i) => {
            return <li key={i}>Error</li>;
          })
        ) : (
          props.resultsFromUser.map((res, i) => {
            return <li key={i}>{res.toString()}</li>;
          })
        )}
      </ul>
    </div>
    <div>
      <span>Comparison</span>
      <ul>
        {props.compareResults.map((comp, i) => {
          return <li key={i}>{comp}</li>;
        })}
      </ul>
    </div>
  </div>
);

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
