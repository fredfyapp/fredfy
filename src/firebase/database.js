import { renderApp, store } from "../app";

// ********** DATABASE FIREBASE ********** //
import database from "./firebase";
// import { userId } from "./auth";

// ********** DATABASE MOCKUP ********** //
import databaseMockup from "../databaseModel/database.json";

// ********** ACTIONS ********** //
import { setUser } from "../actions/user";

// EXPORT DATABASE
export let charactersDB;
export let subjectsDB;
export let usersDB;

const checkUserId = userId => {
  let isNewUser = true;

  for (let user in usersDB) {
    if (user === userId) {
      isNewUser = false;
      break;
    }
  }

  console.log(store.getState().user);

  if (isNewUser) {
    console.log("is new");
    const user = store.getState().user;
    database.ref(`users/${userId}`).update({
      ...user,
      userId
    });
  } else {
    console.log("not new");
    database
      .ref(`users/${userId}`)
      .once("value")
      .then(snapshot => {
        const user = snapshot.val();
        store.dispatch(setUser(user));
      });
  }

  renderApp();
};

// FETCH DATABASE FIREBASE
export default userId => {
  database
    .ref()
    .once("value")
    .then(snapshot => {
      console.log("db firebase");
      const database = snapshot.val();

      // EXPORT DATABASE
      charactersDB = database.characters;
      subjectsDB = database.subjects;
      usersDB = database.users;

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
};
