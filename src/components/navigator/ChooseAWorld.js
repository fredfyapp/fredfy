// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** COMPONENTS ********** //
import WorldCard from "./WorldCard";

// ********** ACTIONS ********** //
import { setChosenSubject } from "../../actions/navigation";

class ChooseAWorld extends React.Component {
  handleChosenWorld = subject => {
    this.props.setChosenSubject(subject);
  };

  render() {
    const { database } = this.props;

    let subjects = [];
    for (let [key, value] of Object.entries(database)) {
      subjects.push(value);
      // console.log(key, value);
    }

    return (
      <div id="world" className="block-content">
        <h2>Choose a World</h2>
        <div>
          {subjects.map(subject => {
            return (
              <Link
                to={`/teaches-you/${subject.subjectName}`}
                key={subject.subjectName}
                onClick={() => {
                  this.handleChosenWorld(subject.subjectName);
                }}
              >
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
