// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';
import { setChosenCharacter } from '../actions/user';

class CharacterCard extends React.Component {

  handleChosenCharacter = () => {
    const character = this.props.character.name;
    const subject = this.props.chosenWorld.subject;
    const userId = this.props.user;

    this.props.dispatch(setChosenCharacter(character, subject));
  }

  render() {
    // const subject = this.props.chosenWorld.subject;
    if (this.props.chosenWorld.subject) {
      console.log('yes');
    } else {
      console.log('no');
    }

    let subject = '';
    return (
      <div>
        <Link
          to={`/teaches-you/${subject}`}
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
