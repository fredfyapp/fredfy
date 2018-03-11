// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';

const ChooseACharacter = ({}) => {
  return (
    <div>
      <h2>ChooseACharacter</h2>
      <div className='choose-a-character'>
        <div className='characters-row'>
          <CharacterCard />
          <CharacterCard />
        </div>

        <div className='characters-row'>
          <CharacterCard />
          <CharacterCard />
        </div>

        <div className='characters-row'>
          <CharacterCard />
          <CharacterCard />
        </div>
      </div>
    </div>
  );
}

ChooseACharacter.propTypes = {
  // : PropTypes.
};

export default ChooseACharacter;
