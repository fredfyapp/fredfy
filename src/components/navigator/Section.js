// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import ChallengeCard from './ChallengeCard';
import Ranking from './Ranking';
import Inventory from './Inventory';
import SectionCard from './SectionCard';

const Section = ({}) => {
  return (
    <div>
      <h2>Section</h2>
      <div className='section'>

        <div className='section__map'>
          <div className='section__section-cards'>
            <SectionCard />
            <SectionCard />
            <SectionCard />
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
            <Ranking />
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
