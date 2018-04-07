// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = props => {
  return (
    <div>
      404 - <Link to="/">Go home</Link>
    </div>
  );
};

export default NotFoundPage;
