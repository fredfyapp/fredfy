// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

const SectionCard = props => {
  const subject = props.subject;
  const sectionName = props.section.sectionName;

  return (
    <div>
      <h2
        className={
          props.user.subjects[subject].finishedSections[sectionName]
            ? 'sectionDone'
            : 'false'
        }>
        {sectionName}
      </h2>
    </div>
  );
};

SectionCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(SectionCard);
