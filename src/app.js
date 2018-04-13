// ********** REACT ********** //
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";

// ********** REDUX ********** //
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

// ********** FIREBASE ********** //
import userAuth from "./firebase/auth";

// ********** DATABASE MOCKUP ********** //
import { callDatabaseMockup } from "./firebase/database";

// ********** COMPONENTS ********** //
import Loading from "./components/Loading";

// ********** STYLES ********** //	
import "normalize.css/normalize.css";	
import "./styles/styles.scss";

// INITIALIZE STORE FOR REDUX
export const store = configureStore();

// ########## FETCH DATABASE FROM FIREBASE ########## //
// userAuth();

// ReactDOM.render(<Loading />, document.getElementById("app"));

// export const renderApp = () => {
//   const jsx = (
//     <Provider store={store}>
//       <div className="opacity-toggle-slow">
//         <AppRouter />
//       </div>
//     </Provider>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };
// ################################################## //

// ########## FETCH DATABASE FROM MOCKUP ########## //
callDatabaseMockup();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
// ################################################## //
