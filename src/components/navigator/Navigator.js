// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

// ********** ROUTER ********** //
import { Route } from 'react-router-dom';

// ********** COMPONENTS ********** //
import Footer from './Footer';
import Header from './Header';

const Navigator = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div className='navigator'>
        <Header />
        <div className='content-container'>
          <Component {...props} />
        </div>
        <Footer />
      </div>
    )} />
  );
}

Navigator.propTypes = {
  // : PropTypes.
};

export default Navigator;
