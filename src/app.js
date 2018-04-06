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
import databaseMockup from "../database/database.json";

const store = configureStore();

// COMMENTED OUT UNTIL TESTS ARE FINISHED
// ReactDOM.render(<h1>Loading page</h1>, document.getElementById("app"));

// let database = {};

// databaseFirebase
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     database = snapshot.val();
//     renderApp();
//   });

// const renderApp = () => {
//   const jsx = (
//     <Provider store={store}>
//       <AppRouter database={database} />
//     </Provider>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };

const jsx = (
  <Provider store={store}>
    <AppRouter database={databaseMockup} />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
