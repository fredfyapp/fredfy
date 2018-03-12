// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ subjects }) => {
  return (
    <div className='table__header'>
      <h3>Name</h3>
      {subjects[0].map((subject) => {
        return (
          <h3 key={subject.subject}>{subject.subject}</h3>
        );
      })}
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ users }) => {
  let points = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
    <div className='table__body'>
      <div className='table__row'>
        {users[0].map((user) => {
          points = [];
          return (
            <div className='table__item' key={user.userId}>
              <h4>{user.userName}</h4>

              {user.subjects.map((subject) => {
                points.push(parseInt(subject.points));

                return (
                  <div key={user.userId, subject.subject}>
                    <h4>{subject.points}</h4>
                  </div>
                );

              })}
              <h4>{points.reduce(reducer)}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Ranking = ({ database }) => {
  return (
    <div className='ranking'>
      <h2>Ranking</h2>
      <div className='table'>
        <TableHeader subjects={[database.learning]} />
        <TableBody users={[database.users]} />
      </div>
    </div>
  );
}

Ranking.propTypes = {
  // : PropTypes.
};

export default Ranking;
