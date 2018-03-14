// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';
import { setChosenCharacter } from '../actions/user';

class CharacterCard extends React.Component {

  handleChosenCharacter = () => {
    let character = this.props.character.name;
    let subject = this.props.chosenWorld.subject;
    let userId = this.props.user;
    console.log(character);
    console.log(userId);

    this.props.dispatch(setChosenCharacter(character, subject));
  }

  render() {
    return (
      <div>
        <Link
          to='/section'
          onClick={this.handleChosenCharacter}
        >
          <h2>{this.props.character.name}</h2>
        </Link>
      </div>
    );
  }

}

CharacterCard.propTypes = {
  // : PropTypes.
};

export default connect()(CharacterCard);
