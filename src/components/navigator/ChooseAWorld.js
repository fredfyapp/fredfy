// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** DATABASE ********** //
import { subjectsDB } from "../../firebase/database";

// ********** COMPONENTS ********** //
import WorldCard from "./WorldCard";

// ********** ACTIONS ********** //
import { setChosenSubject } from "../../actions/navigation";

// ********** SELECTORS ********** //
import objectToArray from "../../selectors/objectToArray";

class ChooseAWorld extends React.Component {
  handleChosenSubject = subjectName => {
    this.props.setChosenSubject(subjectName);
  };

  render() {
    console.log("chooseAWorld");
    const subjects = objectToArray(subjectsDB) || null;
    return (
      <div id="world" className="block-content opacity-toggle-fast">
        <h2>Choose a World</h2>
        <div>
          {subjects.map(subject => {
            return (
              <Link
                to={`/teaches-you/${subject.subjectName}`}
                key={subject.subjectName}
                onClick={() => {
                  this.handleChosenSubject(subject.subjectName);
                }}>
                <WorldCard subjectName={subject.subjectName} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setChosenSubject: subject => dispatch(setChosenSubject(subject))
});

export default connect(null, mapDispatchToProps)(ChooseAWorld);
