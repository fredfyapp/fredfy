import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import LogIn from '../components/auth/LogIn';
import SignUp from '../components/auth/SignUp';
import Profile from '../components/auth/Profile';
import Help from '../components/Help';
import Team from '../components/Team';
import Terms from '../components/Terms';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/login' component={LogIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/profile' component={Profile} />
        <Route path='/logout' component={Home} />
        <Route path='/help' component={Help} />
        <Route path='/team' component={Team} />
        <Route path='/terms' component={Terms} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
