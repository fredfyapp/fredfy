// ********** REACT ********** //
import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";

// ********** HISTORY ********** //
import createHistory from "history/createBrowserHistory";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setUser } from "../actions/user";

// ********** COMPONENTS ********** //
// ********** NAVIGATOR ********** //
import Account from "../components/navigator/Account";
import ChooseACharacter from "../components/navigator/ChooseACharacter";
import ChooseAWorld from "../components/navigator/ChooseAWorld";
import HowItWorks from "../components/navigator/HowItWorks";
import Navigator from "../components/navigator/Navigator";
import OurTeam from "../components/navigator/OurTeam";
import Ranking from "../components/navigator/Ranking";
import ChooseASection from "../components/navigator/ChooseASection";
import Welcome from "../components/navigator/Welcome";

// ********** PLAYER ********** //
import ChooseAChallenge from "../components/player/ChallengePage";
import Player from "../components/player/Player";
import QuestionsCard from "../components/player/QuestionsCard";
import QuestionsPage from "../components/player/QuestionsPage";
import ProblemsPage from "../components/player/ProblemsPage";

// ********** NOT FOUND ********** //
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends React.Component {
  // componentDidMount() {
  // const { users } = this.props.database;
  // console.log('from AppRouter', users[0]);

  // ********** ONLY FOR DEVELOPMENT, IN PRODUCTION LOGIN WILL TRIGGER STATE CHANGE ********** //
  // this.props.dispatch(setUser(users[0]));

  // }

  render() {
    const { database } = this.props;

    return (
      <Router history={history}>
        <div>
          <Switch>
            <Navigator path='/' component={Welcome} exact={true} />
            <Navigator path='/account' component={Account} />
            <Navigator path='/choose-a-character-for/:subject' database={database} component={ChooseACharacter} />
            <Navigator path='/choose-a-world' database={database} component={ChooseAWorld} />
            <Navigator path='/how-it-works' component={HowItWorks} />
            <Navigator path='/our-team' component={OurTeam} />
            <Navigator path='/ranking' database={database} component={Ranking} />
            <Navigator path='/teaches-you/:subject' database={database} component={ChooseASection} exact={true} />
            <Player path='/teaches-you/:subject/:section' database={database} component={QuestionsPage} exact={true} />
            <Player path='/choose-a-challenge' database={database} component={ChooseAChallenge} />
            <Player path='/challenges-you/:challenge' database={database} component={ProblemsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(AppRouter);
export const history = createHistory();
