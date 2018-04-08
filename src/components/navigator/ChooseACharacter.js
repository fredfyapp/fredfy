// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";
import { setChosenCharacter } from "../../actions/user";

// ********** COMPONENTS ********** //
import CharacterCard from "../CharacterCard";

class ChooseACharacter extends React.Component {
  handleChosenCharacter = () => {
    const character = this.chosenCharacter;
    const subjectName = this.props.subjectName;
    this.props.dispatch(setChosenCharacter(character, subjectName));
  };

  componentDidMount() {
    !this.props.subjectName && this.props.history.push("/");
  }

  render() {
    const user = this.props.user;
    const subjectName = this.props.subjectName;

    return (
      <div id="hero" className="block-content">
        <h2>Choose a Hero</h2>
        {/* {this.props.database.characters.map(character => {
          return (
            <Link
              key={character.name
              to={`/teaches-you/${subjectName}`}
              onClick={() => {
                this.chosenCharacter = character.name;
                this.handleChosenCharacter();
              }}
            >
              <CharacterCard characterName={character.name} />
            </Link>
          );
        })} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subjectName: state.navigation.chosenSubject,
  user: state.user
});

export default connect(mapStateToProps)(ChooseACharacter);
