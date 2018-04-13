// ********** REACT ********** //
import React from "react";
import ReactDOM from "react-dom";
import AppRouter, { history } from "./routers/AppRouter";

// ********** REDUX ********** //
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// ********** FIREBASE ********** //
import userAuth from "./firebase/auth";

// ********** DATABASE MOCKUP ********** //
import databaseMockup from "../databaseModel/database.json";

// ********** COMPONENTS ********** //
import Loading from "./components/Loading";

// ********** STYLES ********** //
import "normalize.css/normalize.css";
import "./styles/styles.scss";

// ********** SELECTORS ********** //
import objectToArray from "./selectors/objectToArray";

// INITIALIZE STORE FOR REDUX
export const store = configureStore();

// ### FETCHS DATABASE FROM FIREBASE ### //
userAuth();

ReactDOM.render(<Loading />, document.getElementById("app"));

export const renderApp = () => {
  const jsx = (
    <Provider store={store}>
      <div className="opacity-toggle-slow">
        <AppRouter />
      </div>
    </Provider>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};
// ############################# //

// ### FETCHS DATABASE FROM MOCKUP ### //
// export const charactersDB = databaseMockup.characters;
// export const subjectsDB = databaseMockup.subjects;
// export const usersDB = databaseMockup.users;

// const jsx = (
//   <Provider store={store}>
//     <AppRouter />
//   </Provider>
// );

// ReactDOM.render(jsx, document.getElementById("app"));
// ############################# //
