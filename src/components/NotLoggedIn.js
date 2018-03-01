import React from 'react';
import { NavLink } from 'react-router-dom';

const NotLoggedIn = () => (
  <div>
    <NavLink to='/login' activeClassName='is-active'>Log In</NavLink>
    <NavLink to='/register' activeClassName='is-active'>Sign Up</NavLink>
  </div>
);

export default NotLoggedIn;
