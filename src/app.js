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
import database from "./firebase/firebase";
// import databaseMockup from "./fixtures/json-mockup";
import databaseMockup from "../database/database.json";

let databaseObject = {};

database
  .ref()
  .once("value")
  .then(snapshot => {
    databaseObject = snapshot.val();
    // console.log("database loaded");
    // console.log(databaseObject);
  });

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter database={databaseMockup} />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
