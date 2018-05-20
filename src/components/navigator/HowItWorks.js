// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";

const HowItWorks = ({}) => {
  return (
    <div id="how-works" className="block-content container">
      <h2>How Fredfy works?</h2>
      <div className="general-block">
        <h3>1) Start the game on the homepage</h3>
        <p>To learn a programming language in an adventure game.</p>
        <h3>2) Choose a world</h3>
        <p>The world are the programming language available now on Fredfy.</p>
        <h3>3) Choose a hero</h3>
        <p>Fred, Chloe, Piu, Greg, Aoife and 127 are the characters than will help you on this new adventure.</p>
        <h3>4) Meet the adventure map</h3>
        <p>Is the page that will show all the quest that you need to solve, points, ranking and repeation task to help on your learning process.</p>
        <h3>5) Repeat</h3>
        <p>Repeation is the based of learning in Fredfy and boost you hero repeating the tasks.</p>
      </div>
    </div>
  );
};

HowItWorks.propTypes = {
  // : PropTypes.
};

export default HowItWorks;
