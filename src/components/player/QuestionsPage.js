// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Explanation from './Explanation';

const QuestionsPage = ({ database }) => {
  return (
    <div className='questions-page'>
      <h2>QuestionsPage</h2>
      <div>
        <Explanation section={database.learning[0].sections[0]}/>
        <CharacterCard character={{ "name": "Chloe" }} />
      </div>
    </div>
  );
}

QuestionsPage.propTypes = {
  // : PropTypes.
};

export default QuestionsPage;
