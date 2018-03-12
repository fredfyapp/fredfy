// ********** REACT ********** //
import React from 'react';
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
import ChallengePage from '../components/player/ChallengePage';
import Player from '../components/player/Player';
import QuestionsCard from '../components/player/QuestionsCard';
import QuestionsPage from '../components/player/QuestionsPage';

// ********** NOT FOUND ********** //
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ({ database }) => (
  <Router history={history}>
    <div>
      <Switch>
        <Navigator path='/' component={Welcome} exact={true} />
        <Navigator path='/account' component={Account} />
        <Navigator path='/choose-a-character' database={database} component={ChooseACharacter} />
        <Navigator path='/choose-a-world' database={database} component={ChooseAWorld} />
        <Navigator path='/how-it-works' component={HowItWorks} />
        <Navigator path='/our-team' component={OurTeam} />
        <Navigator path='/ranking' database={database} component={Ranking} />
        <Navigator path='/section' database={database} component={Section} />
        <Player path='/questions-page' database={database} component={QuestionsPage} />
        <Player path='/questions-card' database={database} component={QuestionsCard} />
        <Player path='/challenge-page' database={database} component={ChallengePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
export const history = createHistory();
