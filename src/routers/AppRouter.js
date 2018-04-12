// ********** REACT ********** //
import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";

// ********** HISTORY ********** //
import createHistory from "history/createBrowserHistory";

// ********** REDUX ********** //
import { connect } from "react-redux";

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
<<<<<<< HEAD
=======
import ChooseAChallenge from "../components/challenge/ChooseAChallenge";
>>>>>>> master
import Player from "../components/player/Player";
import QuestionsCard from "../components/player/QuestionsCard";
import QuestionsPage from "../components/player/QuestionsPage";
import ProblemsPage from "../components/player/ProblemsPage";

// ******* Challenge ********** //
import ChooseAChallenge from "../components/challenge/ChooseAChallenge";
import ChallengePage from "../components/challenge/ChallengePage";

// ********** NOT FOUND ********** //
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends React.Component {
  func = () => {
    console.log("works");
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Navigator path="/" component={Welcome} exact={true} />
            <Navigator path="/account" component={Account} />
            <Navigator
              path="/choose-a-character-for/:subject"
              component={ChooseACharacter}
            />
            <Navigator path="/choose-a-world" component={ChooseAWorld} />
            <Navigator path="/how-it-works" component={HowItWorks} />
            <Navigator path="/our-team" component={OurTeam} />
            <Navigator path="/ranking" component={Ranking} />
            <Navigator
              path="/teaches-you/:subject"
              component={ChooseASection}
              exact={true}
            />
            <Player
              path="/teaches-you/:subject/:section"
              component={QuestionsPage}
              exact={true}
<<<<<<< HEAD
            /> */}

            {/* Challenge routes begins*/}
            <Player
              path="/choose-a-challenge"
              component={ChooseAChallenge}
              exact={true}
            />
            <Player
              path="/challenges-you/:challenge"
              component={ChallengePage}
              exact={true}
            />
            {/* Challenge routes end */}
=======
            />
            <Player path="/choose-a-challenge" component={ChooseAChallenge} />
>>>>>>> master
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// AppRouter.propTypes = {

// };

export default connect()(AppRouter);
export const history = createHistory();
