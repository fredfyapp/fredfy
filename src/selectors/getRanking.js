// ********** DATABASE ********** //
import { usersDB } from "../firebase/database";

// NOT BEING USED, BECAUSE POINTS GAINED ARE ADDED TO SUBJECT AND TOTAL WHEN QUESTION
// IS FINISHED
// export const getUserTotalPoints = (user) => {
//   let totalPoints = 0;

//   for (let subject in user.subjects) {

//     totalPoints += user.subjects[subject].points;
//   }

//   return totalPoints;
// };

export const getGlobalTopUsers = () => {
  let usersArray = [];
  for (let [key, value] of Object.entries(usersDB)) {
    usersArray.push(value);
  }

  let finalList = [];

  usersArray.map(user => {
    const name = user.username;
    const id = user.id;
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
  let usersArray = [];
  for (let [key, value] of Object.entries(usersDB)) {
    usersArray.push(value);
  }

  let finalList = [];

  usersArray.map(user => {
    const name = user.username;
    const id = user.id;
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
