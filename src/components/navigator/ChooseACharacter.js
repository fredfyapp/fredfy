// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";
import { setChosenCharacter } from "../../actions/user";

// ********** DATABASE ********** //
import { charactersDB } from "../../app";

// ********** COMPONENTS ********** //
import CharacterCard from "../CharacterCard";

class ChooseACharacter extends React.Component {
  handleChosenCharacter = characterName => {
    const subjectName = this.props.subjectName;
    this.props.dispatch(setChosenCharacter(characterName, subjectName));
  };

  componentDidMount() {
    !this.props.subjectName && this.props.history.push("/");
  }

  render() {
    let charactersArray = [];
    for (let [key, value] of Object.entries(charactersDB)) {
      charactersArray.push(value);
    }
    const user = this.props.user;
    const subjectName = this.props.subjectName;

    return (
      <div id="hero" className="block-content">
        <h2>Choose a Hero</h2>
        {charactersArray.map(character => {
          return (
            <Link
              key={character.name}
              to={`/teaches-you/${subjectName}`}
              onClick={() => {
                this.handleChosenCharacter(character.name);
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

const mapStateToProps = state => ({
  subjectName: state.navigation.chosenSubject,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
