// ********** REACT ********** //
import React from 'react';

// ********** ROUTER ********** //
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// ********** COMPONENTS ********** //
// ********** NAVIGATOR ********** //
import Account from '../components/navigator/Account';
import ChooseACharacter from '../components/navigator/ChooseACharacter';
import ChooseAWorld from '../components/navigator/ChooseAWorld';
import HowItWorks from '../components/navigator/HowItWorks';
import Navigator from '../components/navigator/Navigator';
import OurTeam from '../components/navigator/OurTeam';
import Ranking from '../components/navigator/Ranking';
import Section from '../components/navigator/Section';
import Welcome from '../components/navigator/Welcome';

// ********** PLAYER ********** //
import Player from '../components/player/Player';

// ********** NOT FOUND ********** //
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Navigator path='/' component={Welcome} exact={true} />
        <Navigator path='/account' component={Account} />
        <Navigator path='/choose-a-character' component={ChooseACharacter} />
        <Navigator path='/choose-a-world' component={ChooseAWorld} />
        <Navigator path='/how-it-works' component={HowItWorks} />
        <Navigator path='/our-team' component={OurTeam} />
        <Navigator path='/ranking' component={Ranking} />
        <Navigator path='/section' component={Section} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
export const history = createHistory();
