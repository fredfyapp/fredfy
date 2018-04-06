// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";
import { setChosenCharacter } from "../../actions/user";

// ********** COMPONENTS ********** //
import CharacterCard from "../CharacterCard";

class ChooseACharacter extends React.Component {
  handleChosenCharacter = () => {
    const character = this.chosenCharacter;
    const subject = this.props.subjectName;
    this.props.dispatch(setChosenCharacter(character, subject));
  };

  componentDidMount() {
    !this.props.subjectName && this.props.history.push("/");
  }

  render() {
    const user = this.props.user;
    const subject = this.props.subjectName;

    return (
      <div id="hero" className="block-content">
        <h2>Choose a Hero</h2>
        {this.props.database.characters.map(character => {
          return (
            <Link
              key={character.name}
              to={`/teaches-you/${subject}`}
              onClick={() => {
                this.chosenCharacter = character.name;
                this.handleChosenCharacter();
              }}
            >
              <CharacterCard characterName={character.name} />
            </Link>
          );
        })}
      </div>
    );
  }
}

ChooseACharacter.propTypes = {
  // : PropTypes.
};

const mapStateToProps = state => ({
  subjectName: state.navigation.chosenWorld.subject,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
