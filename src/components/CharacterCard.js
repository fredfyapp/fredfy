// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ character = ''}) => {
  return (
    <div>
      <h2>{character.name}</h2>
    </div>
  );
}

CharacterCard.propTypes = {
  // : PropTypes.
};

export default CharacterCard;
