// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** SELECTORS ********** //
import { getSubjectTopUsers } from '../../selectors/getRanking';

const TableHeader = ({ subjectObject }) => {
  return (
    <div className='table__header'>
      <h3>Name</h3>
      <h3>{subjectObject.subject}</h3>
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ users, subjectObject }) => {
  let points = [];
  const subjectName = subjectObject.subject;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div className='table__body'>
      <div className='table__row'>
        {
          getSubjectTopUsers(users[0], subjectObject.subject).map((user) => {
            return (
              <div className='table__item' key={user.name, user.subjectPoints}>
                <h4>{user.name}</h4>
                <h4>{user.subjectPoints}</h4>
                <h4>{user.totalPoints}</h4>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

const SectionRanking = ({ database, subjectObject, user }) => {
  return (
    <div>
      <h3>Ranking</h3>
      <div className='table'>
        <TableHeader subjectObject={subjectObject} />
        <TableBody users={[database.users]} subjectObject={subjectObject} />
      </div>
    </div>
  );
}

SectionRanking.propTypes = {
  // : PropTypes.
};

export default SectionRanking;
