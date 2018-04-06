// ********** REACT ********** //
import React from "react";

// ********** SELECTORS ********** //
import { getGlobalTopUsers } from "../../selectors/getRanking";

const TableHeader = ({ subjects }) => {
  return (
    <div className="table__header">
      <h3>Name</h3>
      {subjects[0].map(subject => {
        return <h3 key={subject.subject}>{subject.subject}</h3>;
      })}
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ users }) => {
  return (
    <div className="table__body">
      <div className="table__row">
        {getGlobalTopUsers(users[0]).map(user => {
          return (
            <div className="table__item" key={user.id}>
              <h4>{user.name}</h4>
              {user.subjects.map(subject => {
                return (
                  <h4 key={user.id + subject.subjectName}>
                    {subject.subjectPoints}
                  </h4>
                );
              })}
              <h4>{user.totalPoints}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Ranking = ({ database }) => {
  return (
    <div className="ranking">
      <h2>Ranking</h2>
      <div className="table">
        <TableHeader subjects={[database.learning]} />
        <TableBody users={[database.users]} />
      </div>
    </div>
  );
};

export default Ranking;
