// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Explanation from './Explanation';

// ********** ACTIONS ********** //
import { setIsPlaying } from '../../actions/playing';

class QuestionsPage extends React.Component {

  render() {
    const subjectName = this.props.match.params.subject;
    const sectionName = this.props.match.params.section;

    const subjectObject = this.props.database.learning.find(
      (subject) => subject.subject === subjectName
    );

    const sectionObject = subjectObject.sections.find(
      (section) => section.sectionName === sectionName
    );
    console.log(sectionObject);

    const character = this.props.user.subjects[subjectName].character;

    return (
      <div className='questions-page'>
        <div>
          <Explanation sectionObject={sectionObject} />
          <CharacterCard characterName={character} />
          <Link to={`/teaches-you/${subjectName}`}>
            <h3>Go back</h3>
          </Link>
          <button onClick={() => {
            this.props.setIsPlaying(!this.props.playing.isPlaying)
          }}>Play</button>
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
