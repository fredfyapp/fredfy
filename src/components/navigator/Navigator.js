// ********** REACT ********** //
import React from "react";
import { Route } from "react-router-dom";

// ********** COMPONENTS ********** //
import Footer from "./Footer";
import Header from "./Header";

const Navigator = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={props => {
        return (
          <div className="navigator">
            <Header />
            <div className="content-container">
              <Component {...props} />
            </div>
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default Navigator;
