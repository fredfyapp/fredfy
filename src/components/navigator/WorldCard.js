// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** ACTIONS ********** //
import { setChosenWorld } from '../../actions/navigation';
import { setFinishedSubject } from "../../actions/user";

// ********** ACTIONS ********** //
import checkFinishedSections from '../../selectors/checkFinishedSections';

class WorldCard extends React.Component {

  handleChosenWorld = () => {
    this.props.dispatch(setChosenWorld(this.props.subject));
  }

  componentDidMount() {
    const subjectName = this.props.subject.subject;
    const userSubject = this.props.user.subjects[subjectName];
    const finishedSections = this.props.user.subjects[subjectName].finishedSections;

    if (checkFinishedSections(finishedSections)) {
      this.props.setFinishedSubject(subjectName, true);
    } else {
      this.props.setFinishedSubject(subjectName, false);
    }

  }

  render() {
    const subject = this.props.subject.subject;
    return (
      <div>
        <Link
          to={`/teaches-you/${subject}`}
          onClick={this.handleChosenWorld}
        >
          <h2>
            {this.props.subject.subject}
            {
              this.props.user.subjects[subject].isFinished &&
              ' - done!'
            }
          </h2>
        </Link>
      </div>
    );
  }

}

WorldCard.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setFinishedSubject: (subject, bool) => dispatch(setFinishedSubject(subject, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorldCard);
