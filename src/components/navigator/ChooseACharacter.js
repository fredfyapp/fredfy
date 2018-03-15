// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';

const ChooseACharacter = (props) => {
  let user = props.user;
  let chosenWorld = props.chosenWorld;
  return (
    <div>
      <h2>ChooseACharacter</h2>
      {props.database.characters.map((character) => {
        return (
          <CharacterCard
            key={character.name}
            character={character}
            user={user}
            chosenWorld={chosenWorld}
          />
        );
      })}
    </div>
  );
};

ChooseACharacter.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  chosenWorld: state.navigation.chosenWorld,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
