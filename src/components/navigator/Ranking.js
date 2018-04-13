// ********** REACT ********** //
import React from "react";

// ********** DATABASE ********** //
import { subjectsDB } from "../../firebase/database";

// ********** SELECTORS ********** //
import { getGlobalTopUsers } from "../../selectors/getRanking";
import objectToArray from "../../selectors/objectToArray";

const TableHeader = () => {
  const subjects = objectToArray(subjectsDB);
  return (
    <div className="table__header">
      <h3>Name</h3>
      {subjects.map(subject => {
        return <h3 key={subject.subjectName}>{subject.subjectName}</h3>;
      })}
      <h3>Total</h3>
    </div>
  );
};

const TableBody = () => {
  return (
    <div className="table__body">
      <div className="table__row">
        {getGlobalTopUsers().map(user => {
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

const Ranking = () => {
  return (
    <div className="ranking opacity-toggle-fast">
      <h2>Ranking</h2>
      <div className="table">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
};

export default Ranking;
