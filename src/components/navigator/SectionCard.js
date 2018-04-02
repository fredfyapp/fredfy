// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SectionCard = ({ subject, section }) => {
  // console.log('subject', subject);
  // console.log('section', section);
  return (
    <Link
      to={`/teaches-you/${subject}/${section.sectionName}`}
    >
      <div>
        <h2>{section.sectionName}</h2>
      </div>
    </Link>
  );
}

SectionCard.propTypes = {
  // : PropTypes.
};

export default SectionCard;
