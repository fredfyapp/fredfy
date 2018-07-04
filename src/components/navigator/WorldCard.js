// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

import { setFinishedSubject } from "../../actions/user";

// ********** SELECTORS ********** //
import checkFinishedSections from "../../selectors/checkFinishedSections";

class WorldCard extends React.Component {
  constructor(props) {
    super(props);

    this.finishedSections();
  }

  finishedSections() {
    const subjectName = this.props.subjectName;
    const userSubjects = this.props.user.subjects;

    // CHECK IF THE SUBJECT IS FINISHED
    // IF THERE IS A FINISHED SECTIONS PROPERTY FOR THE CURRENT SUBJECT
    if (userSubjects) {
      if (userSubjects[subjectName]) {
        const finishedSections = userSubjects[subjectName].finishedSections;
        if (finishedSections) {
          if (
            checkFinishedSections(finishedSections) === true &&
            checkFinishedSections(finishedSections) !==
              userSubjects[subjectName].isFinished
          ) {
            this.props.setFinishedSubject(subjectName, true);
          } else if (
            checkFinishedSections(finishedSections) === false &&
            checkFinishedSections(finishedSections) !==
              userSubjects[subjectName].isFinished
          ) {
            this.props.setFinishedSubject(subjectName, false);
          }
        }
      }
    }
  }

  render() {
    const subject = this.props.subjectName;
    let isFinished = false;

    if (this.props.user.subjects) {
      if (this.props.user.subjects[subject]) {
        if (this.props.user.subjects[subject].isFinished) {
          isFinished = true;
        }
      }
    }

    return (
      <div>
        <h2>
          {subject}
          {isFinished && " - done!"}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps");
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) =>
    dispatch(setFinishedSubject(subject, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
