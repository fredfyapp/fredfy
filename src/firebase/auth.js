import { history } from "../routers/AppRouter";
import { store } from "../app";
import database, { firebase } from "./firebase";
import callDatabase, { callDatabaseMockup } from "./database";

// ********** ACTIONS ********** //
import { login, logout } from "../actions/auth";
import { setIsLoginModalOpen, setIsAppRunning } from "../actions/navigation";

function checkForFirstTime(userId) {
  database
    .ref("users/")
    .child(userId)
    .once("value", function(snapshot) {
      var exists = snapshot.val() !== null;
      userFirstTimeCallback(userId, exists);
    });
}

// Setup what to do with the user information.
function userFirstTimeCallback(userId, exists) {
  if (exists) {
    console.log("user " + userId + " exists!");
    // Do something here you want to do for non-firstime users...
  } else {
    // Do something here you want to do for first time users (Store data in database?)

    database.ref(`users/${userId}`).set({});
  }
}

// CHECK IF THE USER IS LOGGED
export default () => {
  firebase.auth().onAuthStateChanged(user => {
    // USER IS LOGGED
    if (user) {
      // const userId = user.uid;
      store.dispatch(login(user.uid));

      // CLOSE LOGIN MODAL AFTER SUCCESSFUL LOGIN
      store.getState().navigation.isLoginModalOpen &&
        store.dispatch(setIsLoginModalOpen(false));

      store.dispatch(setIsAppRunning(true));
      callDatabase(user);
      console.log("is logged");
      // checkForFirstTime(user.uid);
      return;
    }

    // USER ISN'T LOGGED
    // store.dispatch(logout());
    console.log("not logged");

    // REFRESH PAGE IF LOGOUT BUTTON WAS CLICKED
    if (store.getState().navigation.isAppRunning) {
      window.location.reload();
      return;
    }

    // ISN'T LOGGED AND LOGOUT BUTTON WASN'T CLICKED
    history.push("/");
    store.dispatch(setIsAppRunning(true));

    callDatabase();
  });
};
