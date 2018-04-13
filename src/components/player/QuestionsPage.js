// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** DATABASE ********** //
import { subjectsDB } from "../../firebase/database";

// ********** COMPONENTS ********** //
import CharacterCard from "../CharacterCard";
import Explanation from "./Explanation";
import QuestionsCard from "./QuestionsCard";

// ********** ACTIONS ********** //
import {
  setIsPlaying,
  setShuffledQuestions,
  setQuestionsAnswered
} from "../../actions/playing";

// ********** SELECTORS ********** //
import shuffleArray from "../../selectors/shuffleArray";
import objectToArray from "../../selectors/objectToArray";

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    const subjectName = props.match.params.subject;
    const sectionName = props.match.params.section;

    this.subjectObject = subjectsDB[subjectName];

    this.sectionObject = this.subjectObject.sections[sectionName];
  }

  componentDidMount() {
    // CHECK IF THERE IS A CHARACTER FOR THE SUBJECT
    const user = this.props.user;

    const subjectName = this.props.match.params.subject;

    !user.subjects[subjectName].character &&
      this.props.history.push(`/choose-a-character-for/${subjectName}`);

    // CALLED HERE SO SHUFFLING JUST HAPPENS ONCE, WHEN COMPONENT FIRST RENDERS
    const questions = objectToArray(this.sectionObject.questions);
    this.props.setShuffledQuestions(shuffleArray(questions));
  }

  render() {
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;
    const explanation = this.sectionObject.explanation;
    const characterName = this.props.user.subjects[subjectName].character;
    const isPlaying = this.props.isPlaying;
    const shuffledQuestions = this.props.shuffledQuestions;

    return (
      <div className="questions-page opacity-toggle-fast">
        <div>
          <h2>{sectionName}</h2>
          {isPlaying ? (
            <QuestionsCard
              questions={shuffledQuestions}
              subjectName={subjectName}
              {...this.props}
            />
          ) : (
            <Explanation explanation={explanation} />
          )}

          <CharacterCard characterName={characterName} />
          <Link
            to={`/teaches-you/${subjectName}`}
            onClick={() => {
              this.props.setQuestionsAnswered(0);
              this.props.setIsPlaying(false);
            }}>
            <h3>Go back</h3>
          </Link>

          {!isPlaying && (
            <button
              onClick={() => {
                this.props.setIsPlaying(true);
              }}>
              Play
            </button>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    isPlaying: state.playing.isPlaying,
    shuffledQuestions: state.playing.shuffledQuestions
  };
};

const mapDispatchToProps = dispatch => ({
  setIsPlaying: isPlaying => dispatch(setIsPlaying(isPlaying)),
  setShuffledQuestions: shuffledQuestions =>
    dispatch(setShuffledQuestions(shuffledQuestions)),
  setQuestionsAnswered: questionsAnswered =>
    dispatch(setQuestionsAnswered(questionsAnswered))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
