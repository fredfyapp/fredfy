// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';

const ChooseACharacter = ({ database }) => {
  return (
    <div>
      <h2>ChooseACharacter</h2>
      {database.characters.map((character) => {
        return (
          <CharacterCard key={character.name} character={character} />
        );
      })}
    </div>
  );
}

ChooseACharacter.propTypes = {
  // : PropTypes.
};

export default ChooseACharacter;
