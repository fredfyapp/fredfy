import { renderApp } from "../app";

// ********** DATABASE FIREBASE ********** //
import database from "./firebase";
import { userId } from "./auth";

// ********** DATABASE MOCKUP ********** //
import databaseMockup from "../databaseModel/database.json";

// EXPORT DATABASE
export let charactersDB;
export let subjectsDB;
export let usersDB;

// FETCH DATABASE FIREBASE
export default () => {
  database
    .ref()
    .once("value")
    .then(snapshot => {
      const database = snapshot.val();
      charactersDB = database.characters;
      subjectsDB = database.subjects;
      usersDB = database.users;

      // RENDER METHOD MUST COME IN THE LAST POSITION
      console.log("database", userId);
      renderApp();

      // SETTIMEOUT JUST FOR TESTING
      // setTimeout(() => {
      //   renderApp();
      // }, 1000);
    });
};

// FETCH DATABASE MOCKUP
export const callDatabaseMockup = () => {
  console.log("db mockup");
  charactersDB = databaseMockup.characters;
  subjectsDB = databaseMockup.subjects;
  usersDB = databaseMockup.users;
};
