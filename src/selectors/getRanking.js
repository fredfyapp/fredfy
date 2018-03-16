import database from '../fixtures/json-mockup';
import user from '../reducers/userReducerDefaultState';

const users = database.users;

export const getUserTotalPoints = (user) => {
  let totalPoints = 0;

  for (let subject in user.subjects) {

    totalPoints += user.subjects[subject].points;
  }

  return totalPoints;

};

console.log('getUserTotalPoints', getUserTotalPoints(user));

export const getGlobalTopUsers = (users) => {
  let finalList = [];

  users.map((user) => {
    finalList.push({
      name: user.userName,
      points: user.totalPoints
    });
  });

  return finalList.sort((a, b) => {
        return a.points < b.points ? 1 : -1;
    });
};

console.log('getGlobalTopUsers', getGlobalTopUsers(users));

export const getSubjectTopUsers = (users) => {
  let finalList = [];

  // JUST FOR TESTING, TAKE FROM PARAMS LATER
  let subject = 'css';

  users.map((user) => {
    finalList.push({
      name: user.userName,
      points: user.subjects[subject].points
    });
  });

  return finalList.sort((a, b) => {
        return a.points < b.points ? 1 : -1;
    });
};

console.log('getSubjectTopUsers', getSubjectTopUsers(users));
