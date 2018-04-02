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
import { setIsPlaying } from '../../actions/playing';

// ********** SELECTORS ********** //
import shuffleArray from '../../selectors/shuffleArray';

class QuestionsPage extends React.Component {

  componentDidMount() {
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;

    const subjectObject = this.props.database.learning.find(
      (subject) => subject.subject === subjectName
    );

    const sectionObject = subjectObject.sections.find(
      (section) => section.sectionName === sectionName
    );

    // CALLED HERE SO SHUFFLING JUST HAPPENS ONCE, WHEN COMPONENT RENDERS
    this.shuffledQuestions = [];
    shuffleArray(sectionObject.questions, this.shuffledQuestions);
  }

  render() {
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;

    const subjectObject = this.props.database.learning.find(
      (subject) => subject.subject === subjectName
    );

    const sectionObject = subjectObject.sections.find(
      (section) => section.sectionName === sectionName
    );

    const character = this.props.user.subjects[subjectName].character;
    const isPlaying = this.props.playing.isPlaying;

    return (
      <div className='questions-page'>
        <div>
            <h2>{sectionObject.sectionName}</h2>
          {
            isPlaying ?
             <QuestionsCard shuffledQuestions={this.shuffledQuestions} /> :
            <Explanation sectionObject={sectionObject} />
          }

          <CharacterCard characterName={character} />
          <Link
            to={`/teaches-you/${subjectName}`}
            onClick={() => {
              this.props.setIsPlaying(false)
            }}
          >
            <h3>Go back</h3>
          </Link>

          {
            !isPlaying &&
              <button
                onClick={() => {
                  this.props.setIsPlaying(true)
                }}
              >Play</button>
          }
        </div>
      </div>
    );
  }

}

QuestionsPage.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  user: state.user,
  playing: state.playing
});

const mapDispatchToProps = (dispatch) => ({
  setIsPlaying: (isPlaying) => dispatch(setIsPlaying(isPlaying))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
