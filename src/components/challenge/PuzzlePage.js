import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

// ********** api ************ //
import database from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentPuzzle,
  setChallenge,
  setCurrentWorkout,
  setUserCode,
} from "../../actions/challenge";

import { setPuzzlesSolved } from "../../actions/user";

// vm // eval
import vm from "vm";

// selectors
import objectToArray from "../../selectors/objectToArray";

class PuzzlePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasBeenRun: false,
      syntaxError: false,
      errorType: "",
      resultsExpected: [],
      resultsFromUser: [],
      hasNext: null,
      hasPrev: null,
      isUserReviewing: true,
    };
  }

  componentDidMount = () => {
    const {
      currentWorkout,
      userCode,
      currentPuzzle,
      currentChallenges,
      setUserCode,
    } = this.props;
    const { challenges, puzzle } = this.props.match.params;
    const currentIndex = currentWorkout.findIndex(p => p.name === puzzle);
    currentWorkout[currentIndex - 1] && this.setState({ hasPrev: true });
    currentWorkout[currentIndex + 1] && this.setState({ hasNext: true });
    userCode && setUserCode("");
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.userCode) {
      this.evaluateCode(nextProps.userCode);
    }
  };

  loadNext = args => {
    const { setCurrentPuzzle, currentWorkout, currentChallenges } = this.props;
    const { puzzle, challenges } = this.props.match.params;
    const currentIndex = currentWorkout.findIndex(p => p.name === puzzle);
    const nextPuzzle = currentWorkout[currentIndex + args];
    setCurrentPuzzle(nextPuzzle);
    this.props.history.push(`/challenges-you/${challenges}/${nextPuzzle.name}`);
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
        resultsFromUser,
      });
      this.assessUserCode(
        resultsExpected.toString() === resultsFromUser.toString(),
      );
    } catch (error) {
      console.log("something went wrong");
      console.log(error);
      this.setState({
        hasAnyError: true,
        errorType: error.toString(),
      });
    }
  };

  assessUserCode = isCorrect => {
    this.setState({
      isCorrect,
    });
    if (isCorrect) {
      const oldPuzzlesSolved = this.props.puzzlesSolved;
      const currentPuzzle = this.props.currentPuzzle;
      const currentWorkout = this.props.currentWorkout;
      const { isUserReviewing } = this.state;
      const hasBeenSolved = oldPuzzlesSolved.findIndex((p, k) => {
        return p.name === currentPuzzle.name;
      });

      if (hasBeenSolved === -1) {
        currentPuzzle.lastAttempt = Date.now();
        currentPuzzle.numberOfTimesSolved = 1;
        oldPuzzlesSolved.push(currentPuzzle);
      }
      if (isUserReviewing) {
        const newCurrentWorkout = { ...currentWorkout }.filter(
          p => p.name !== currentPuzzle.name,
        );
        console.log(newCurrentWorkout);
      }
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
      isCorrect,
      errorType,
    } = this.state;
    let compareResults = [];
    if (hasBeenRun) {
      resultsExpected.forEach((res, i) => {
        res === resultsFromUser[i]
          ? compareResults.push(<p style={{ color: "green" }}>Pass</p>)
          : compareResults.push(<p style={{ color: "red" }}>Failed!</p>);
      });
    }

    return (
      <div>
        <div>
          <h1>
            {<Link to={"/choose-a-challenge"}>Challenges</Link>}
            {" / "}
            {
              <Link to={`/challenges-you/${challenges}`}>
                {challenges.padEnd(20, " ")}
              </Link>
            }
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
      <pre> Expected </pre>
      <ul>
        {props.resultsExpected[0] === undefined ? (
          props.resultsFromUser.map((res, i) => {
            return <li key={i}>Wrong solution or Test inputs</li>;
          })
        ) : (
          props.resultsExpected.map((res, i) => {
            return (
              <li key={i}>
                <pre>
                  {props.inputs[i]} -> {res.toString()}
                </pre>
              </li>
            );
          })
        )}
      </ul>
    </div>
    <div>
      <ul>
        <pre> Run </pre>
        {props.resultsFromUser[0] === undefined ? (
          props.resultsFromUser.map((res, i) => {
            return (
              <li key={i}>
                <pre> Error </pre>
              </li>
            );
          })
        ) : (
          props.resultsFromUser.map((res, i) => {
            return (
              <li key={i}>
                <pre> {res.toString()} </pre>
              </li>
            );
          })
        )}
      </ul>
    </div>
    <div>
      <pre>Results</pre>
      <ul>
        {props.compareResults.map((comp, i) => {
          return (
            <li key={i}>
              <pre>{comp}</pre>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentPuzzle: state.challenge.currentPuzzle,
  currentChallenges: state.challenge.currentChallenges,
  userCode: state.challenge.userCode,
  currentWorkout: state.challenge.currentWorkout,
  puzzlesSolved: state.user.puzzlesSolved,
  puzzlesToReview: state.user.puzzlesToReview,
});

const mapDispatchToProps = dispatch => ({
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
  setChallenge: challenge => dispatch(setChallenge(challenge)),
  setUserCode: userCode => dispatch(setUserCode(userCode)),
  setPuzzlesSolved: puzzles => dispatch(setPuzzlesSolved(puzzles)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
