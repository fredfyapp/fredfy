import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedIn = () => {
  return (
    <div>
      <NavLink to='/login' activeClassName='is-active'>Profile</NavLink>
      <NavLink to='/register' activeClassName='is-active'>Log Out</NavLink>
    </div>
  )
};

export default LoggedIn;
