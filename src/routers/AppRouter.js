import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AddQuestions from '../components/questions/AddQuestions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Help from '../components/Help';
import Home from '../components/Home';
import LoginPage from '../components/auth/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import Profile from '../components/auth/Profile';
import Section from '../components/Section';
import SignUp from '../components/auth/SignUp';
import ChooseAWorld from '../components/ChooseAWorld';
import Team from '../components/Team';
import Terms from '../components/Terms';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className='main-container'>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/add-questions' component={AddQuestions} />
        <Route path='/help' component={Help} />
        <Route path='/login' component={LoginPage} />
        <Route path='/logout' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/section/:id' component={Section} />
        <Route path='/signup' component={SignUp} />
        <Route path='/choose-a-world' component={ChooseAWorld} />
        <Route path='/team' component={Team} />
        <Route path='/terms' component={Terms} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
