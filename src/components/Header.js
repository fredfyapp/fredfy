import React from 'react';
import { NavLink } from 'react-router-dom';
import NotLoggedIn from './NotLoggedIn';
import LoggedIn from './LoggedIn';

const Header = () => {
  let loginState = false;

  return (
    <header className='header'>
      <div className='header__home'>
        <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
      </div>
      {/* IF STATEMENT TO DETERMINE WHICH NAVLINKS TO SHOW DEPENDING ON LOGIN STATE */}
      <div className='header__control'>
        {loginState ? <LoggedIn />: <NotLoggedIn />}
      </div>
    </header>
  );
};

export default Header;
