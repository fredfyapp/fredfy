// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({}) => {
  return (
    <footer id="footer ">
      <div className="logo">
        <h1>Fredfy</h1>
        <h2>
          Learn<br />Code<br />Repeat
        </h2>
      </div>
      <div className="links">
        <ul className="pages">
          <li>How works Fredfy?</li>
          <li>Our Team</li>
          <li>Ranking</li>
        </ul>
        <ul className="media test">
          <li>Made in Dublin/Ireland @ 20188888</li>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // : PropTypes.
};

export default Footer;
