// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Explanation from './Explanation';

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
        <h2>QuestionsPage</h2>
        <div>
          <Explanation explanation={sectionObject.explanation} />
          <CharacterCard characterName={character} />
        </div>
      </div>
    );
  }

}

QuestionsPage.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps)(QuestionsPage);
