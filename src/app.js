// ********** REACT ********** //
import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";

// ********** REDUX ********** //
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";

// ********** STYLES ********** //
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// ********** DATABASE ********** //
import databaseFirebase from "./firebase/firebase";
import databaseMockup from "../databaseModel/database.json";

const store = configureStore();

// COMMENTED OUT UNTIL TESTS ARE FINISHED
// ReactDOM.render(<h1>Loading page</h1>, document.getElementById("app"));

// EXPORTING DATABASE
// export let charactersDB;
// export let subjectsDB;
// export let usersDB;

// databaseFirebase
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const database = snapshot.val();
//     charactersDB = database.characters;
//     subjectsDB = database.subjects;
//     usersDB = database.users;

//     // RENDER METHOD MUST COME IN THE LAST POSITION
//     renderApp();
//   });

// const renderApp = () => {
//   const jsx = (
//     <Provider store={store}>
//       <AppRouter />
//     </Provider>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };

// EXPORTING DATABASE MOCKUP
export const charactersDB = databaseMockup.characters;
export const subjectsDB = databaseMockup.subjects;
export const usersDB = databaseMockup.users;

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
