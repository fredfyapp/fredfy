import { renderApp } from "../app";

// ********** DATABASE FIREBASE ********** //
import database from "./firebase";
// import { userId } from "./auth";

// ********** DATABASE MOCKUP ********** //
import databaseMockup from "../databaseModel/database.json";

// EXPORT DATABASE
export let charactersDB;
export let subjectsDB;
export let usersDB;
export let challengesDB;

const checkUserId = userId => {
  let isNewUser = true;

  for (let user in usersDB) {
    if (user === userId) {
      isNewUser = false;
      break;
    }
  }

  if (isNewUser) {
    console.log("is new");
  } else {
    console.log("not new");
  }

  renderApp();
};

// FETCH DATABASE FIREBASE
export default userId => {
  database.ref().once("value").then(snapshot => {
    const database = snapshot.val();

    // EXPORT DATABASE
    charactersDB = database.characters;
    subjectsDB = database.subjects;
    usersDB = database.users;
    challengesDB = database.challenges;

    // console.log("database", database);

    if (userId) {
      checkUserId(userId);
      return;
    }

    // RENDER METHOD MUST COME IN THE LAST POSITION TO ALLOW
    // DATABASE TO BE DECLARED FIRST AND USER HANDLED
    renderApp();
  });
};

// FETCH DATABASE MOCKUP
export const callDatabaseMockup = () => {
  console.log("db mockup");
  charactersDB = databaseMockup.characters;
  subjectsDB = databaseMockup.subjects;
  usersDB = databaseMockup.users;
  challengesDB = databaseMockup.challengesDB;
};
