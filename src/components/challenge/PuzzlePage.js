import React, { Component } from "react";
import { Link } from "react-router-dom";
import Editor from "./Editor";

// ********** api ************ //
import database from "../../firebase/firebase";
import { firebase } from "../../firebase/firebase";

// ******** REDUX **********//
import { connect } from "react-redux";
import {
  setCurrentPuzzle,
  setChallenge,
  setCurrentWorkout,
  setUserCode,
} from "../../actions/challenge";

import { setPuzzleSolved } from "../../actions/user";

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
      const { userId, currentPuzzle } = this.props;
      const { isUserReviewing } = this.state;
      const currentDate = new Date().getTime();
      const puzzleJustSolved = {
        ...currentPuzzle,
        lastAttempt: currentDate,
        numberOfTimesSolved: 1,
        isToBeReviewed: false,
      };

      const db = database.ref(`users/${userId}/`);
      db
        .child("puzzlesSolved")
        .orderByChild("name")
        .equalTo(currentPuzzle.name)
        .once("value", s => {
          const data = s.val();
          if (data) {
            console.log("exis");
          } else {
            database
              .ref(`users/${userId}/puzzlesSolved/`)
              .push(puzzleJustSolved);
          }
        });

      if (isUserReviewing) {
      }
    }
  };

  // handleReviewing = currentWork;

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
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  setCurrentPuzzle: currentPuzzle => dispatch(setCurrentPuzzle(currentPuzzle)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
  setChallenge: challenge => dispatch(setChallenge(challenge)),
  setUserCode: userCode => dispatch(setUserCode(userCode)),
  setPuzzleSolved: (currentPuzzleSolved, currentDate) =>
    dispatch(setPuzzleSolved(currentPuzzleSolved, currentDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PuzzlePage);
