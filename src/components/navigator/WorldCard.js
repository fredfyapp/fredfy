// ********** REACT ********** //
import React from "react";

// ********** REDUX ********** //
import { connect } from "react-redux";

import { setFinishedSubject } from "../../actions/user";

// ********** SELECTORS ********** //
import checkFinishedSections from "../../selectors/checkFinishedSections";

class WorldCard extends React.Component {
  componentDidMount() {
    const subjectName = this.props.subjectName;
    const userSubjects = this.props.user.subjects;
    const userCurrentSubject = userSubjects[subjectName];

    console.log("didMount");
    console.log("userSubjects", userSubjects);

    // CHECK IF THE SUBJECT IS FINISHED
    // IF THERE IS A FINISHED SECTIONS PROPERTY FOR THE CURRENT SUBJECT
    if (JSON.stringify(userSubjects) !== JSON.stringify({})) {
      if (userCurrentSubject) {
        const finishedSections = userCurrentSubject.finishedSections;
        if (finishedSections) {
          if (
            checkFinishedSections(finishedSections) === true &&
            checkFinishedSections(finishedSections) !==
              userCurrentSubject.isFinished
          ) {
            console.log("if");
            this.props.setFinishedSubject(subjectName, true);
          } else if (
            checkFinishedSections(finishedSections) === false &&
            checkFinishedSections(finishedSections) !==
              userCurrentSubject.isFinished
          ) {
            console.log("else");
            this.props.setFinishedSubject(subjectName, false);
          }
        }
      }
    }
  }

  render() {
    const subject = this.props.subjectName;
    return (
      <div>
        <h2>
          {subject}
          {this.props.user.subjects[subject] &&
            this.props.user.subjects[subject].isFinished &&
            " - done!"}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("mapStateToProps");
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) =>
    dispatch(setFinishedSubject(subject, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
