// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ********** SELECTORS ********** //
import { getSubjectTopUsers } from '../../selectors/getRanking';

const TableHeader = ({ subjectObject }) => {
  return (
    <div className="table__header">
      <h3>Name</h3>
      <h3>{subjectObject.subject}</h3>
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ users, subjectObject }) => {
  return (
    <div className='table__body'>
      <div className='table__row'>
        {
          getSubjectTopUsers(users, subjectObject.subject).map((user) => {
            return (
              <div
                className='table__item'
                key={user.id}>
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

const SubjectRanking = ({ database, subjectObject, user }) => {
  // 'USER' WILL BE USED FOR SORTING CURRENT USER IN THE TABLE
  return (
    <div>
      <Link to="/ranking">
        <h3>Ranking</h3>
      </Link>
      <div className="table">
        <TableHeader subjectObject={subjectObject} />
        <TableBody users={database.users} subjectObject={subjectObject} />
      </div>
    </div>
  );
};

SubjectRanking.propTypes = {
  // : PropTypes.
};

export default SubjectRanking;
