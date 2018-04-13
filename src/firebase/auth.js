import { history } from "../routers/AppRouter";
import { store } from "../app";
import { firebase } from "./firebase";
import callDatabase, { callDatabaseMockup } from "./database";

// ********** ACTIONS ********** //
import { login, logout } from "../actions/auth";
import { setIsLoginModalOpen } from "../actions/navigation";

// CHECK IF THE USER IS LOGGED
export let userId;

export default () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      userId = user.uid;
      store.dispatch(login(user.uid));

      if (store.getState().navigation.isLoginModalOpen === true) {
        store.dispatch(setIsLoginModalOpen(false));
      }

      // console.log(objectToArray(usersDB));
      console.log(user.uid);
      console.log(userId);

      console.log("is logged");
    } else {
      store.dispatch(logout());
      history.push("/");
      console.log("not logged");
    }

    // CALL DATABASE
    callDatabase();
  });
};
