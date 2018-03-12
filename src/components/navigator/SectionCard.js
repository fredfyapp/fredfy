import React from 'react';
import PropTypes from 'prop-types';

const SectionCard = ({ section }) => {
  return (
    <div>
      <h2>{section.sectionName}</h2>
    </div>
  );
}

SectionCard.propTypes = {
  // : PropTypes.
};

export default SectionCard;
