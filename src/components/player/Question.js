// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setIsPlaying, setShuffledOptions } from "../../actions/playing";
import {
  setFinishedSection,
  setSubjectPoints,
  setTotalPoints
} from "../../actions/user";

// ********** SELECTORS ********** //
import shuffleArray from "../../selectors/shuffleArray";
import objectToArray from "../../selectors/objectToArray";

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsAnswered: 0,
      selectedOption: "",
      error: ""
    };

    // SHUFFLES OPTIONS FOR THE FIRST TIME
    const questionsAnswered = this.state.questionsAnswered;
    const questions = this.props.questions;
    const options = objectToArray(questions[questionsAnswered].options);

    if (questions[questionsAnswered]) {
      this.props.setShuffledOptions(shuffleArray(options));
    }
  }

  addPoints = () => {
    const subjectName = this.props.match.params.subject;
    const pointsToAdd = 13;

    this.props.setSubjectPoints(
      subjectName,
      this.props.subjectPoints + pointsToAdd
    );

    this.props.setTotalPoints(this.props.totalPoints + pointsToAdd);
  };

  handleQuestionsAnswered = () => {
    // IF NO OPTION IS CHOSEN
    if (!this.state.selectedOption) {
      this.setState({
        error: "Choose an option"
      });
      return;
    }

    // HAS TO COME AFTER PREVIOUS RETURN OTHERWISE IS GONNA BE UNDEFINED
    const selectedOption = parseInt(this.state.selectedOption);
    const shuffledOptions = this.props.shuffledOptions;

    // IF CHOSEN OPTION IS WRONG
    if (!shuffledOptions[selectedOption].isCorrect) {
      this.setState({
        error: "Try again"
      });
      return;
    }

    // IF CHOSEN OPTION IS CORRECT
    this.setState(prevState => ({
      questionsAnswered: prevState.questionsAnswered + 1,
      selectedOption: "",
      error: ""
    }));

    const questionsAnswered = this.state.questionsAnswered;
    const questions = this.props.questions;
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;

    // WHEN ALL ANSWERS HAVE BEEN COMPLETED
    if (questions.length === questionsAnswered + 1) {
      alert("you finished");
      this.props.setFinishedSection(subjectName, sectionName);
      this.addPoints();
      this.props.history.push(`/teaches-you/${subjectName}`);
      this.props.setIsPlaying(false);
      return;
    }

    // + 1 TO GET NEXT ITEM IN THE ARRAY BECAUSE STATE DIDN'T CHANGE YET
    const options = objectToArray(questions[questionsAnswered + 1].options);
    this.props.setShuffledOptions(shuffleArray(options));
  };

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    const questionsAnswered = this.state.questionsAnswered;
    const questions = this.props.questions;
    const shuffledOptions = this.props.shuffledOptions;

    return (
      <div>
        <h3>Correct questions: {questionsAnswered}</h3>
        {questions[questionsAnswered] && (
          <div>
            <h3>{questions[questionsAnswered].title}</h3>
            <form>
              {shuffledOptions.map((option, index) => (
                <div key={option.answer}>
                  <label>
                    <input
                      type="radio"
                      value={index}
                      checked={this.state.selectedOption === index.toString()}
                      correct={option.isCorrect.toString()}
                      onChange={this.handleOptionChange}
                    />
                    {option.answer}
                  </label>
                </div>
              ))}
            </form>
          </div>
        )}
        <button onClick={this.handleQuestionsAnswered}>Answer</button>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const subjectName = props.match.params.subject;
  return {
    shuffledOptions: state.playing.shuffledOptions,
    subjectPoints: state.user.subjects[subjectName].points,
    totalPoints: state.user.totalPoints
  };
};

const mapDispatchToProps = dispatch => ({
  setIsPlaying: isPlaying => dispatch(setIsPlaying(isPlaying)),
  setShuffledOptions: shuffledOptions =>
    dispatch(setShuffledOptions(shuffledOptions)),
  setFinishedSection: (subject, section) =>
    dispatch(setFinishedSection(subject, section)),
  setSubjectPoints: (subject, points) =>
    dispatch(setSubjectPoints(subject, points)),
  setTotalPoints: points => dispatch(setTotalPoints(points))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
