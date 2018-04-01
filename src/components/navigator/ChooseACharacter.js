// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';

class ChooseACharacter extends React.Component {

  componentWillMount() {
    !this.props.chosenWorld.subject && this.props.history.push('/');
  }

  render() {
    let user = this.props.user;
    let chosenWorld = this.props.chosenWorld;
    return (
      <div>
        <h2>ChooseACharacter</h2>
        {this.props.database.characters.map((character) => {
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
  }
}

ChooseACharacter.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  chosenWorld: state.navigation.chosenWorld,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
