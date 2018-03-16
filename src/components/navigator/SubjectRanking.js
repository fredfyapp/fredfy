// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ subjectObject }) => {
  return (
    <div className='table__header'>
      <h3>Name</h3>
      <h3>{subjectObject.subject}</h3>
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ user, subjectObject }) => {
  let points = [];
  const subjectName = subjectObject.subject;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log('name', subjectName);
  return (
    <div className='table__body'>
      {/* <div className='table__row'>
        {users[0].map((user) => {
          points = [];
          user.subjects.map((subject) => {
            points.push(parseInt(subject.points));
          });

          return (
            <div className='table__item' key={user.userId}>
              <h4>{user.userName}</h4>
                <div>
                  {
                    user.subjects.map((subject) => {
                      return (
                        subject.subject === subjectName &&
                        <h4 key={user.userId, subject.points}>{subject.points}</h4>
                      )
                    })
                  }
                </div>
              <h4>{points.reduce(reducer)}</h4>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

const SectionRanking = ({ subjectObject, user }) => {
  console.log('subjectObject', subjectObject);
  console.log('user', user);
  return (
    <div>
      <h3>Ranking</h3>
      <div className='table'>
        <TableHeader subjectObject={subjectObject} />
        <TableBody user={user} subjectObject={subjectObject} />
      </div>
    </div>
  );
}

SectionRanking.propTypes = {
  // : PropTypes.
};

export default SectionRanking;
