// ********** REACT ********** //
import React from "react";
import PropTypes from "prop-types";

const OurTeam = ({}) => {
  return (
    <div id="our-team" className="block-content container">
      <h2>OurTeam</h2>
      <div className="general-block">
        <h3>Fredfy</h3>
        <p>Learn to program through a gamified approach, making the experience pleasant and fun.</p>
        <h3>Project</h3>
        <p>Through a series of questions the learner will become fluent in the art of coding, having on its way questions of multiple choice, filling the gap and even real coding. Challenges with friends will make the experience even more exciting. It's time to learn how to be a programmer!</p>
          <h3>Authors</h3>
          <ul>
            <li>Catalina Ravest - <i>Documentation and Reseach</i></li>
            <li>Leonardo São Thiago - <i>JavaScript (React) Developer</i></li>
            <li>Marcel Cruz - <i>Product Owner & JavaScript (React) Developer</i> </li>
            <li>Thiago Rodrigues - <i>UX Designer and UI Developer</i></li>
            <li>Willyum Anglim -<i> Documentation and PR</i></li>
          </ul>
      </div>
    </div>
  );
};

OurTeam.propTypes = {
  // : PropTypes.
};

export default OurTeam;
