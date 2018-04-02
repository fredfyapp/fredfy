// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = (props) => {
  return (
    <div>
        <h2>{props.characterName}</h2>
    </div>
  );
}

CharacterCard.propTypes = {
  // : PropTypes.
};

export default CharacterCard;
