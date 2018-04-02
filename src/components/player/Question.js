// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setIsPlaying, setQuestionsAnswered } from '../../actions/playing';

// ********** SELECTORS ********** //
import shuffleArray from '../../selectors/shuffleArray';

class Question extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      optionChosen: '',
      selectedOption: undefined
    };
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleQuestionsAnswered = () => {

    this.props.setQuestionsAnswered(this.props.questionsAnswered + 1);
  }

  componentDidUpdate() {
    const subjectName = this.props.match.params.subject;
    const index = this.props.questionsAnswered;
    const questions = this.props.questions;

    if(index === questions.length) {
      alert('you finished it!');
      this.props.setQuestionsAnswered(0);
      this.props.setIsPlaying(false);
      this.props.history.push(`/teaches-you/${subjectName}`);
    }
  }

  render() {
    const index = this.props.questionsAnswered;
    const questions = this.props.questions;
    let shuffledOptions = [];

    if(this.props.questions[index]) {
      shuffledOptions = shuffleArray(this.props.questions[index].options);
    }

    console.log(questions);
    console.log(shuffledOptions);
    return (
      <div>
        <h3>questionsAnswered: {index}</h3>
        {
          this.props.questions[index] &&
            <div>
              <h3>{this.props.questions[index].title}</h3>
              <form>
                {
                  this.props.questions[index].options.map((option, index) => (
                    <div key={option.answer}>
                      <label>
                        <input
                          type="radio"
                          value={index}
                          checked={this.state.selectedOption === index}
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
      </div>
    );
  }

}

Question.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  questionsAnswered: state.playing.questionsAnswered
});

const mapDispatchToProps = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying)),
  setQuestionsAnswered: (value) => dispatch(setQuestionsAnswered(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
