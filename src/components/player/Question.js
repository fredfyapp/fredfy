// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import {
  setIsPlaying,
  setShuffledOptions,
  setQuestionsAnswered
} from "../../actions/playing";
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
      selectedOption: "",
      error: ""
    };

    // SHUFFLES OPTIONS FOR THE FIRST TIME
    const questionsAnswered = this.props.questionsAnswered;
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

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
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
    const questionsAnswered = this.props.questionsAnswered;
    const questions = this.props.questions;
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;

    // WHEN ALL ANSWERS HAVE BEEN COMPLETED
    if (questions.length === questionsAnswered + 1) {
      alert("you finished");
      this.props.setFinishedSection(subjectName, sectionName);
      this.addPoints();
      this.props.setIsPlaying(false);
      this.props.setQuestionsAnswered(0);
      this.props.history.push(`/teaches-you/${subjectName}`);
      return;
    }

    this.props.setQuestionsAnswered(questionsAnswered + 1);
    this.setState({
      selectedOption: "",
      error: ""
    });

    // + 1 TO GET NEXT ITEM IN THE ARRAY BECAUSE STATE DIDN'T CHANGE YET
    const options = objectToArray(questions[questionsAnswered + 1].options);
    this.props.setShuffledOptions(shuffleArray(options));
  };

  render() {
    const questionsAnswered = this.props.questionsAnswered;
    const questions = this.props.questions;
    const shuffledOptions = this.props.shuffledOptions;

    return (
      <div>
        {questions[questionsAnswered] && (
          <div>
            <div className="opacity-toggle-fast">
              <h3>{questions[questionsAnswered].title}</h3>
            </div>
            <form>
              {shuffledOptions.map((option, index) => (
                <div key={option.answer} className="opacity-toggle-fast">
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
    questionsAnswered: state.playing.questionsAnswered,
    shuffledOptions: state.playing.shuffledOptions,
    subjectPoints: state.user.subjects[subjectName].points,
    totalPoints: state.user.totalPoints
  };
};

const mapDispatchToProps = dispatch => ({
  setIsPlaying: isPlaying => dispatch(setIsPlaying(isPlaying)),
  setQuestionsAnswered: questionsAnswered =>
    dispatch(setQuestionsAnswered(questionsAnswered)),
  setShuffledOptions: shuffledOptions =>
    dispatch(setShuffledOptions(shuffledOptions)),
  setFinishedSection: (subject, section) =>
    dispatch(setFinishedSection(subject, section)),
  setSubjectPoints: (subject, points) =>
    dispatch(setSubjectPoints(subject, points)),
  setTotalPoints: points => dispatch(setTotalPoints(points))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
