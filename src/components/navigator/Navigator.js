// ********** REACT ********** //
import React from "react";
import { Route } from "react-router-dom";

// ********** COMPONENTS ********** //
import Footer from "./Footer";
import Header from "./Header";

const Navigator = ({ component: Component, database, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props => (
        <div className="navigator">
          <Header />
          <div className="content-container">
            <Component {...props} database={database} />
          </div>
          <Footer />
        </div>
      )}
    />
  );
};

export default Navigator;
