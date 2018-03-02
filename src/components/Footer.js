import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
      <NavLink to='/team' activeClassName='is-active'>Team</NavLink>
      <NavLink to='/terms' activeClassName='is-active'>Terms</NavLink>
    </footer>
  );
};

export default Footer;
