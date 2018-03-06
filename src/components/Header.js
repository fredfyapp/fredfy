import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return (
    <div>
      <NavLink to='/profile' activeClassName='is-active'>Profile</NavLink>
      <NavLink to='/logout' activeClassName='is-active'>Log Out</NavLink>
    </div>
  )
};

const NotLoggedInLinks = () => (
  <div>
    <NavLink to='/login' activeClassName='is-active'>Log In</NavLink>
    <NavLink to='/signup' activeClassName='is-active'>Sign Up</NavLink>
  </div>
);

const Header = () => {
  let loginState = false;

  return (
    <header className='header'>
      <div className='header__home'>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      </div>
      <div className='header__control'>
        {loginState ? <LoggedInLinks />: <NotLoggedInLinks />}
      </div>
    </header>
  );
};

export default Header;
