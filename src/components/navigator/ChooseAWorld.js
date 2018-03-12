// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** COMPONENTS ********** //
import WorldCard from './WorldCard';

const ChooseAWorld = ({ database }) => {
  return (
    <div>
      <h2>ChooseAWorld</h2>
      <div>
        {database.learning.map((subject) => {
          return <WorldCard key={subject.subject} subject={subject}/>
        })}
      </div>
    </div>
  );
}

ChooseAWorld.propTypes = {
  // : PropTypes.
};

export default ChooseAWorld;
