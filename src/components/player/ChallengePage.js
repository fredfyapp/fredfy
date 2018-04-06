// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";

// ********** api ************ //
import db from "../../fixtures/challenges";

const ListChallenges = obj => {
  return Object.keys(obj).map(key => <span>{key}</span>);
};

const ChallengePage = ({ database }) => {
  return (
    <div>
      <h2>ChallengePage</h2>
      <ListChallenges obj={db} />
    </div>
  );
};

ChallengePage.propTypes = {
  // : PropTypes.
};

export default ChallengePage;
