import { renderApp } from "../app";
import database from "./firebase";
import { userId } from "./auth";

// EXPORTS DATABASE
export let charactersDB;
export let subjectsDB;
export let usersDB;

// FETCHS DATABASE
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
