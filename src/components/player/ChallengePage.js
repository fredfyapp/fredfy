// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Editor from './Editor';
import Explanation from './Explanation';
import Modal from '../Modal';

const ChallengePage = ({ database }) => {
  return (
    <div>
      <h2>ChallengePage</h2>
      <div>
        {console.log(database)}
        <Explanation challenge={database.learning[0].challenges[0]} />
        <CharacterCard character={{ "name": "Chloe" }} />
        <Editor />
      </div>
    </div>
  );
}

ChallengePage.propTypes = {
  // : PropTypes.
};

export default ChallengePage;
