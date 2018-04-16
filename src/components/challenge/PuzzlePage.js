import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentPuzzles,
  setChallenge,
  setPuzzles
} from "../../actions/challenge";

// vm // eval
import vm from "vm";

class PuzzlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenRun: false,
      syntaxError: false,
      errorType: "",
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
    const { puzzles, userCode, currentPuzzle, currentChallenges } = this.props;
    const { challenges, puzzle } = this.props.match.params;

    puzzles[0] === undefined &&
      database.ref(`challenges/${challenges}`).on("value", snapshot => {
        this.props.setPuzzles(Object.values(snapshot.val()));
      });

    // currentPuzzle.name === undefined &&
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

    try {
      inputs.forEach(test => {
        resultsExpected.push(vm.runInNewContext(solutions + "\n" + test, {}));
      });
      inputs.forEach(test => {
        resultsFromUser.push(vm.runInNewContext(userCode + "\n" + test, {}));
      });
      this.setState({
        hasBeenRun: true,
        hasAnyError: false,
        resultsExpected,
        resultsFromUser
      });
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
      this.setState({
        hasAnyError: true,
        errorType: error.toString()
      });
    }
  };

  render() {
    const { challenges, puzzle } = this.props.match.params;
    const { description, code, section, inputs } = this.props.currentPuzzle;
    const {
      hasBeenRun,
      resultsExpected,
      resultsFromUser,
      hasNext,
      hasPrev,
      hasAnyError,
      errorType
    } = this.state;
    let compareResults = [];
    hasBeenRun &&
      resultsExpected.forEach((res, i) => {
        res === resultsFromUser[i]
          ? compareResults.push(<p style={{ color: "green" }}>Pass</p>)
          : compareResults.push(<p style={{ color: "red" }}>Failed!</p>);
      });

    return (
      <div>
        <div>
          <h1>
            {challenges}
            {" / "}
            {puzzle}
          </h1>
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
        <br />
        <div>
          <span>{description}</span>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Editor code={code} />
          {hasAnyError ? (
            <h1>{errorType}</h1>
          ) : (
            <ListResults
              inputs={inputs}
              resultsExpected={resultsExpected}
              resultsFromUser={resultsFromUser}
              compareResults={compareResults}
            />
          )}
        </div>
      </div>
    );
  }
}

const ListResults = props => (
  <div style={{ display: "flex", alignItems: "space-around" }}>
    <div>
      <span>Expected</span>
      <ul>
        {props.resultsExpected[0] === undefined ? (
          props.resultsFromUser.map((res, i) => {
            return <li key={i}>Wrong solution or Test inputs</li>;
          })
        ) : (
          props.resultsExpected.map((res, i) => {
            return (
              <li key={i}>
                {props.inputs[i]} -> {res.toString()}
              </li>
            );
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
      <span>Results</span>
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
  userCode: state.challenge.userCode,
  puzzles: state.challenge.puzzles
});

const mapDispatchToProps = dispatch => ({
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setPuzzles: puzzles => dispatch(setPuzzles(puzzles)),
  setChallenge: challenge => dispatch(setChallenge(challenge))
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
