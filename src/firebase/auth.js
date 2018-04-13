import { history } from "../routers/AppRouter";
import { store } from "../app";
import { firebase } from "./firebase";
import callDatabase, { callDatabaseMockup } from "./database";

// ********** ACTIONS ********** //
import { login, logout } from "../actions/auth";
import { setIsLoginModalOpen, setIsAppRunning } from "../actions/navigation";

// CHECK IF THE USER IS LOGGED
export default () => {
  firebase.auth().onAuthStateChanged(user => {
    // USER IS LOGGED
    if (user) {
      const userId = user.uid;
      store.dispatch(login(user.uid));

      // CLOSE LOGIN MODAL AFTER SUCCESSFUL LOGIN
      store.getState().navigation.isLoginModalOpen &&
        store.dispatch(setIsLoginModalOpen(false));

      store.dispatch(setIsAppRunning(true));
      callDatabase(userId);
      console.log("is logged");
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
