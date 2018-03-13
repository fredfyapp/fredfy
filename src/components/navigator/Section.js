// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** REDUX ********** //
import { connect } from 'react-redux';

// ********** COMPONENTS ********** //
import ChallengeCard from './ChallengeCard';
import SectionRanking from './SectionRanking';
import Inventory from './Inventory';
import SectionCard from './SectionCard';

// const Section = ({ database, chosenWorld }) => {
const Section = (props) => {
  let currentSection = props.chosenWorld.chosenWorld;
  return (
    <div>
      <h2>{currentSection.subject}</h2>
      <div className='section'>

        <div className='section__map'>
          <div className='section__section-cards'>

            {currentSection.sections.map((section) => {
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
            <SectionRanking currentSection={currentSection} database={props.database} />
          </div>
        </div>

      </div>
    </div>
  );
}

Section.propTypes = {
  // : PropTypes.
};

const mapStateToProps = (state) => ({
  chosenWorld: state.navigation
});

export default connect(mapStateToProps)(Section);
