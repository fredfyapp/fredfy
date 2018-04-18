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
export let challengesDB;

// CHECK IF USER IS NEW OR EXISTING
const checkUserId = user => {
  let isNewUser = true;

  for (let tempUser in usersDB) {
    if (tempUser === user.uid) {
      isNewUser = false;
      break;
    }
  }

  // console.log(store.getState().user);
  // console.log(user.displayName);

  if (isNewUser) {
    console.log("is new");
    const stateUser = store.getState().user;
    database.ref(`users/${user.uid}`).update({
      ...stateUser,
      userId: user.uid,
      username: user.displayName,
      subjects: {}
    });
  } else {
    console.log("not new");
    database
      .ref(`users/${user.uid}`)
      .once("value")
      .then(snapshot => {
        const user = snapshot.val();
        // console.log(user);
        store.dispatch(setUser(user));
      });
  }

  renderApp();
};

// FETCH DATABASE FIREBASE
export default user => {
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
      challengesDB = database.challenges;

      if (user) {
        checkUserId(user);
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
