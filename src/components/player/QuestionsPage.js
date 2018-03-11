// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Explanation from './Explanation';

const QuestionsPage = ({}) => {
  return (
    <div>
      <h2>QuestionsPage</h2>
      <div>
        <CharacterCard />
        <Explanation />
      </div>
    </div>
  );
}

QuestionsPage.propTypes = {
  // : PropTypes.
};

export default QuestionsPage;
