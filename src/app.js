// ********** REACT ********** //
import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";

// ********** REDUX ********** //
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";

// ********** DATABASE ********** //
import databaseFirebase from "./firebase/firebase";
import databaseMockup from "../databaseModel/database.json";

// ********** COMPONENTS ********** //
import Loading from "./components/Loading";

// ********** STYLES ********** //
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

ReactDOM.render(<Loading />, document.getElementById("app"));

// EXPORTING DATABASE
export let charactersDB;
export let subjectsDB;
export let usersDB;

databaseFirebase
  .ref()
  .once("value")
  .then(snapshot => {
    const database = snapshot.val();
    charactersDB = database.characters;
    subjectsDB = database.subjects;
    usersDB = database.users;

    // RENDER METHOD MUST COME IN THE LAST POSITION
    // renderApp();

    // SETTIMEOUT JUST FOR TESTING
    setTimeout(() => {
      renderApp();
    }, 1000);
  });

const renderApp = () => {
  const jsx = (
    <Provider store={store}>
      <div className="opacity-toggle-slow">
        <AppRouter />
      </div>
    </Provider>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

// EXPORTING DATABASE MOCKUP
// export const charactersDB = databaseMockup.characters;
// export const subjectsDB = databaseMockup.subjects;
// export const usersDB = databaseMockup.users;

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// ReactDOM.render(jsx, document.getElementById("app"));
