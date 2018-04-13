// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";
import { setChosenCharacter } from "../../actions/user";

// ********** DATABASE ********** //
import { charactersDB } from "../../firebase/database";

// ********** COMPONENTS ********** //
import CharacterCard from "../CharacterCard";

// ********** SELECTORS ********** //
import objectToArray from "../../selectors/objectToArray";

class ChooseACharacter extends React.Component {
  handleChosenCharacter = characterName => {
    const subjectName = this.props.subjectName;
    this.props.dispatch(setChosenCharacter(characterName, subjectName));
  };

  componentDidMount() {
    !this.props.subjectName && this.props.history.push("/");
  }

  render() {
    const characters = objectToArray(charactersDB);
    const user = this.props.user;
    const subjectName = this.props.subjectName;

    return (
      <div id="hero" className="block-content opacity-toggle-fast">
        <h2>Choose a Hero</h2>
        {characters.map(character => {
          return (
            <Link
              key={character.name}
              to={`/teaches-you/${subjectName}`}
              onClick={() => {
                this.handleChosenCharacter(character.name);
              }}>
              <CharacterCard characterName={character.name} />
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjectName: state.navigation.chosenSubject,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
