// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Explanation from './Explanation';
import QuestionsCard from './QuestionsCard';

// ********** ACTIONS ********** //
import { setIsPlaying, setShuffledQuestions } from '../../actions/playing';

// ********** SELECTORS ********** //
import shuffleArray from '../../selectors/shuffleArray';

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.subjectName = this.props.match.params.subject;
    this.sectionName = this.props.match.params.section;

    this.subjectObject = this.props.database.learning.find(
      subject => subject.subject === this.subjectName,
    );

    this.sectionObject = this.subjectObject.sections.find(
      section => section.sectionName === this.sectionName,
    );
  }

  componentDidMount() {
    // CALLED HERE SO SHUFFLING JUST HAPPENS ONCE, WHEN COMPONENT RENDERS
    this.props.setShuffledQuestions(shuffleArray(this.sectionObject.questions));
  }

  render() {
    const subjectName = this.subjectName;
    const sectionName = this.sectionName;
    const sectionObject = this.sectionObject;
    const character = this.props.user.subjects[this.subjectName].character;
    const isPlaying = this.props.playing.isPlaying;
    const shuffledQuestions = this.props.playing.shuffledQuestions;

    return (
      <div className="questions-page">
        <div>
          <h2>{this.sectionObject[sectionName]}</h2>
          {/* {
            isPlaying ?
             <QuestionsCard
               shuffledQuestions={shuffledQuestions}
               {...this.props}
             /> :
            <Explanation sectionObject={sectionObject} />
          } */}

          <QuestionsCard
            shuffledQuestions={shuffledQuestions}
            {...this.props}
          />

          {/* <CharacterCard characterName={character} /> */}
          <Link
            to={`/teaches-you/${subjectName}`}
            onClick={() => {
              this.props.setIsPlaying(false);
            }}>
            <h3 className='goBack'>Go back</h3>
          </Link>

          {/* {!isPlaying && (
            <button
              onClick={() => {
                this.props.setIsPlaying(true);
              }}>
              Play
            </button>
          )} */}
        </div>
      </div>
    );
  }
}

QuestionsPage.propTypes = {
  // : PropTypes.
};

const mapStateToProps = state => ({
  user: state.user,
  playing: state.playing,
});

const mapDispatchToProps = dispatch => ({
  setIsPlaying: isPlaying => dispatch(setIsPlaying(isPlaying)),
  setShuffledQuestions: shuffledQuestions =>
    dispatch(setShuffledQuestions(shuffledQuestions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
