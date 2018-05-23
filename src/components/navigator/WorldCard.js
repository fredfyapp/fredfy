// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

import { setFinishedSubject } from '../../actions/user';

// ********** SELECTORS ********** //
import checkFinishedSections from '../../selectors/checkFinishedSections';

class WorldCard extends React.Component {
  componentDidMount() {
    const subjectName = this.props.subject.subject;
    const userSubject = this.props.user.subjects[subjectName];
    let finishedSections;

    if (this.props.user.subjects[subjectName]) {
      finishedSections = this.props.user.subjects[subjectName].finishedSections;
    }

    if (finishedSections) {
      if (checkFinishedSections(finishedSections)) {
        this.props.setFinishedSubject(subjectName, true);
      } else {
        this.props.setFinishedSubject(subjectName, false);
      }
    }

    // if (checkFinishedSections(finishedSections)) {
    //   this.props.setFinishedSubject(subjectName, true);
    // } else {
    //   this.props.setFinishedSubject(subjectName, false);
    // }
  }

  render() {
    const subject = this.props.subject.subject;
    let subjectStatus;

    if (this.props.user.subjects[subject]) {
      if (this.props.user.subjects[subject].isFinished) {
        subjectStatus = 'subjectDone';
      }
    } else {
      subjectStatus = 'subjectBlocked';
    }

    return (
      <div className={`${subject} ${subjectStatus}`}>
        <h2>{subject}</h2>
      </div>
    );
  }
}

WorldCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) =>
    dispatch(setFinishedSubject(subject, bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
