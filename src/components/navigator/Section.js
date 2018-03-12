// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import ChallengeCard from './ChallengeCard';
import SectionRanking from './SectionRanking';
import Inventory from './Inventory';
import SectionCard from './SectionCard';

const Section = ({ database }) => {
  const currentSection = database.learning[0];
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
            <SectionRanking />
          </div>
        </div>

      </div>
    </div>
  );
}

Section.propTypes = {
  // : PropTypes.
};

export default Section;
