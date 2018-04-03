// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

const SectionCard = (props) => {
  const subject = props.subject;
  const sectionName = props.section.sectionName;
  console.log('subject', subject);
  console.log('section', sectionName);
  return (
    <Link
      to={`/teaches-you/${subject}/${sectionName}`}
    >
      <div>
        <h2>
          { sectionName }
          {
            props.user.subjects[subject].finishedSections[sectionName] &&
            ' - done!'
          }
        </h2>
      </div>
    </Link>
  );
}

SectionCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(SectionCard);
