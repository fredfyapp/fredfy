// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import ChallengeCard from './ChallengeCard';
import SubjectRanking from './SubjectRanking';
import Inventory from './Inventory';
import SectionCard from './SectionCard';

class Section extends React.Component {

  componentWillMount() {
    const user = this.props.user;

    const subjectName = this.props.match.params.subject;

    !user.subjects[subjectName].character &&
    this.props.history.push('/choose-a-character');

  }

  render() {
    const subjectObject = this.props.subjectObject;
    return (
      <div>
        <h2>{subjectObject.subject}</h2>
        <div className='section'>

          <div className='section__map'>
            <div className='section__section-cards'>

              {subjectObject.sections.map((section) => {
                return (
                  <SectionCard key={section.sectionName} section={section}/>
                );
              })}

            </div>
            <div className='section__challenge-card'>
              <ChallengeCard />
            </div>
          </div>

          <div className='section__sidepanel'>
            <div className='inventory-panel'>
              <Inventory />
            </div>
            <div className='ranking-panel'>
              <SubjectRanking subjectObject={subjectObject} user={this.props.user} />
            </div>
          </div>

        </div>
      </div>
    );
  }

}

Section.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state, props) => ({
  subjectObject: props.database.learning.find((subject) => subject.subject === props.match.params.subject),
  user: state.user
});

export default connect(mapStateToProps)(Section);
