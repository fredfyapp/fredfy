// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** COMPONENTS ********** //
import WorldCard from "./WorldCard";

// ********** ACTIONS ********** //
import { setChosenWorld } from "../../actions/navigation";

class ChooseAWorld extends React.Component {
  handleChosenWorld = subject => {
    this.props.setChosenWorld(subject);
  };

  render() {
    const { database } = this.props;

    let subjects = [];
    for (let [key, value] of Object.entries(database)) {
      subjects.push(value);
      console.log(key, value);
    }
    console.log(subjects);
    console.log(this.props.database);
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
                  this.handleChosenWorld(subject);
                }}
              >
                <WorldCard subject={subject} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

ChooseAWorld.propTypes = {
  // : PropTypes.
};

const mapDispatchToProps = dispatch => ({
  setChosenWorld: subject => dispatch(setChosenWorld(subject))
});

export default connect(null, mapDispatchToProps)(ChooseAWorld);
