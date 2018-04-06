// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";

// ********** REDUX ********** //
import { connect } from "react-redux";

import { setFinishedSubject } from "../../actions/user";

// ********** SELECTORS ********** //
import checkFinishedSections from "../../selectors/checkFinishedSections";

class WorldCard extends React.Component {
  componentDidMount() {
    const subjectName = this.props.subject.subjectName;
    const userSubject = this.props.user.subjects[subjectName];
    const finishedSections = this.props.user.subjects[subjectName]
      .finishedSections;

    if (checkFinishedSections(finishedSections)) {
      this.props.setFinishedSubject(subjectName, true);
    } else {
      this.props.setFinishedSubject(subjectName, false);
    }
  }

  render() {
    const subject = this.props.subject.subjectName;
    return (
      <div>
        <h2>
          {subject}
          {this.props.user.subjects[subject].isFinished && " - done!"}
        </h2>
      </div>
    );
  }
}

WorldCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) =>
    dispatch(setFinishedSubject(subject, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
