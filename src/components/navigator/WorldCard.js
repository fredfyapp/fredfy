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
    const userSubject = this.props.user.subjects[subjectName];
    const finishedSections =
      this.props.user.subjects[subjectName].finishedSections || "test";
    console.log(finishedSections);

    // if (checkFinishedSections(finishedSections)) {
    //   this.props.setFinishedSubject(subjectName, true);
    // } else {
    //   this.props.setFinishedSubject(subjectName, false);
    // }
  }

  render() {
    const subject = this.props.subjectName;
    return (
      <div>
        <h2>
          {subject}
          {/* {this.props.user.subjects[subject].isFinished && " - done!"} */}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) =>
    dispatch(setFinishedSubject(subject, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
