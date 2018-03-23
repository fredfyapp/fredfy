// ********** ASSETS FOR TESTING ********** //
import database from '../fixtures/json-mockup';
// import user from '../reducers/userReducerDefaultState';

const users = database.users;
let subject = 'css';

export const getUserTotalPoints = (user) => {
  let totalPoints = 0;

  for (let subject in user.subjects) {

    totalPoints += user.subjects[subject].points;
  }

  return totalPoints;

};

export const getGlobalTopUsers = (users) => {
  let finalList = [];

  users.map((user) => {

    let name = user.userName;
    let totalPoints = user.totalPoints;
    let subjects = [];

    for (let subject in user.subjects) {
      subjects.push({
        subjectName: subject,
        subjectPoints: user.subjects[subject].points
      });
    }

    finalList.push({
      name,
      totalPoints,
      subjects
    });

  });

  return finalList.sort((a, b) => {
    return a.totalPoints < b.totalPoints ? 1 : -1;
  });
};

export const getSubjectTopUsers = (users, subject) => {
  let finalList = [];

  users.map((user) => {

    let name = user.userName;
    let totalPoints = user.totalPoints;
    let subjectPoints = user.subjects[subject].points;

    finalList.push({
      name,
      totalPoints,
      subjectPoints
    });
  });

  return finalList.sort((a, b) => {
        return a.subjectPoints < b.subjectPoints ? 1 : -1;
    });
};
