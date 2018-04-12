// ********** REACT ********** //
import React from "react";

// ********** SELECTORS ********** //
import { getSubjectTopUsers } from "../../selectors/getRanking";

const TableHeader = ({ subjectName }) => {
  return (
    <div className="table__header">
      <h3>Name</h3>
      <h3>{subjectName}</h3>
      <h3>Total</h3>
    </div>
  );
};

const TableBody = ({ subjectName }) => {
  return (
    <div className="table__body">
      <div className="table__row">
        {getSubjectTopUsers(subjectName).map(user => {
          return (
            <div className="table__item" key={user.id}>
              <h4>{user.name}</h4>
              <h4>{user.subjectPoints}</h4>
              <h4>{user.totalPoints}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SubjectRanking = ({ subjectName, user }) => {
  // PARAM 'USER' WILL BE USED FOR SORTING CURRENT USER IN THE TABLE
  return (
    <div>
      <h3>Ranking</h3>
      <div className="table">
        <TableHeader subjectName={subjectName} />
        <TableBody subjectName={subjectName} />
      </div>
    </div>
  );
};

export default SubjectRanking;
