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
    return (
      <div>
        <h2>ChooseAWorld</h2>
        <div>
          {this.props.database.learning.map(subject => {
            return (
              <Link
                to={`/teaches-you/${subject.subject}`}
                key={subject.subject}
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
