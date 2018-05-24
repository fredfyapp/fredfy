// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setIsPlaying, setShuffledOptions } from '../../actions/playing';
import { setFinishedSection, setSubjectPoints, setTotalPoints } from '../../actions/user';

// ********** SELECTORS ********** //
import shuffleArray from '../../selectors/shuffleArray';

class Question extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      questionsAnswered: 0,
      selectedOption: '',
      error: ''
    };
  }

  handleQuestionsAnswered = () => {
    if(!this.state.selectedOption) {
      this.setState({
        error: 'Choose an option'
      });
      return;
    }

    // HAS TO COME AFTER PREVIOUS RETURN OTHERWISE IS GONNA BE UNDEFINED
    const selectedOption = parseInt(this.state.selectedOption);
    const shuffledOptions = this.props.shuffledOptions;

    if (!shuffledOptions[selectedOption].isCorrect) {
      this.setState({
        error: 'Wrong answer'
      });
      return;
    }

    this.setState((prevState) => ({
      questionsAnswered: prevState.questionsAnswered + 1,
      selectedOption: '',
      error: ''
    }));

    const index = this.state.questionsAnswered;
    const questions = this.props.questions;
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;
    const points = 13;

    // WHEN ALL ANSWERS HAVE BEEN COMPLETED
    if (questions.length === index + 1) {
      alert('you finished');
      this.props.setFinishedSection(subjectName, sectionName);
      this.props.setSubjectPoints(subjectName, this.props.subjectPoints + points);

      this.props.setTotalPoints(this.props.totalPoints + points);

      this.props.history.push(`/teaches-you/${subjectName}`);
      this.props.setIsPlaying(false);
      return;
    }

    // + 1 TO GET NEXT ITEM IN THE ARRAY BEFORE CHANGING STATE
    this.props.setShuffledOptions(shuffleArray(questions[index + 1].options));
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  componentDidMount() {
    const index = this.state.questionsAnswered;
    const questions = this.props.questions;

    if(questions[index]) {
      this.props.setShuffledOptions(shuffleArray(questions[index].options));
    }
  }

  render() {
    const index = this.state.questionsAnswered;
    const questions = this.props.questions;
    const shuffledOptions = this.props.shuffledOptions;

    return (
      <div>
        <h3>Correct questions: {index}</h3>
        {
          questions[index] &&
            <div>
              <h3>{questions[index].title}</h3>
              <form>
                {
                  shuffledOptions.map((option, index) => (
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
                  ))
                }
              </form>
            </div>
        }
        <button onClick={this.handleQuestionsAnswered}>Answer</button>
        {
          this.state.error && <p>{this.state.error}</p>
        }
      </div>
    );
  }

}

Question.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state, props) => ({
  shuffledOptions: state.playing.shuffledOptions,
  subjectPoints: state.user.subjects[props.subjectName].points,
  totalPoints: state.user.totalPoints,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying)),
  setShuffledOptions: (shuffledOptions) => dispatch(setShuffledOptions(shuffledOptions)),
  setFinishedSection: (subject, section) => dispatch(setFinishedSection(subject, section)),
  setSubjectPoints: (subject, points) => dispatch(setSubjectPoints(subject, points)),
  setTotalPoints: (points) => dispatch(setTotalPoints(points))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
