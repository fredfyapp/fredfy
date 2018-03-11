// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import CharacterCard from '../CharacterCard';
import Editor from './Editor';
import Explanation from './Explanation';
import Modal from '../Modal';

const ChallengePage = ({}) => {
  return (
    <div>
      <h2>ChallengePage</h2>
      <div>
        <Explanation />
        <CharacterCard />
        <Editor />
      </div>
    </div>
  );
}

ChallengePage.propTypes = {
  // : PropTypes.
};

export default ChallengePage;
