// ********** DATABASE ********** //
import { usersDB } from "../firebase/database";
import objectToArray from "../selectors/objectToArray";

export const getGlobalTopUsers = () => {
  let finalList = [];

  objectToArray(usersDB).map(user => {
    const name = user.username;
    const id = user.userId;
    const totalPoints = user.totalPoints;
    const subjects = [];

    for (let subject in user.subjects) {
      subjects.push({
        subjectName: subject,
        subjectPoints: user.subjects[subject].points
      });
    }

    finalList.push({
      name,
      id,
      totalPoints,
      subjects
    });
  });

  return finalList.sort((a, b) => {
    return a.totalPoints < b.totalPoints ? 1 : -1;
  });
};

export const getSubjectTopUsers = subject => {
  let finalList = [];

  objectToArray(usersDB).map(user => {
    const name = user.username;
    const id = user.userId;
    const totalPoints = user.totalPoints;
    const subjectPoints = user.subjects[subject].points;

    finalList.push({
      name,
      id,
      totalPoints,
      subjectPoints
    });
  });

  return finalList.sort((a, b) => {
    return a.subjectPoints < b.subjectPoints ? 1 : -1;
  });
};
