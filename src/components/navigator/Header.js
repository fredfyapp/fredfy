// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setIsLoginModalOpen } from "../../actions/navigation";
import { setPuzzlesToReview } from "../../actions/user";
import { setCurrentWorkout } from "../../actions/challenge";

import database, { firebase } from "../../firebase/firebase";
import chal from "../../fixtures/chal.json";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      puzzlesToReview: [],
    };
  }

  handleLogout() {
    console.log("handle clicked");
    firebase.auth().signOut();
    console.log("after sign out");
  }
  componentDidMount = () => {
    const { userId } = this.props;
    const currentDate = new Date().getTime();
    const userRef = database.ref(`users/${userId}/`);
    const ten = 10 * 1000;
    if (userId) {
      userRef
        .child("puzzlesSolved")
        .orderByChild("shouldBeReviewed")
        .equalTo(true)
        .once("value", s => {
          if (s.val()) {
            this.setState({
              puzzlesToReview: Object.values(s.val()),
            });
          }
        });
    }

    if (userId) {
      userRef
        .child("puzzlesSolved")
        .orderByChild("shouldBeReviewed")
        .equalTo(false)
        .once("value", s => {
          if (s.val()) {
            for (const [ key, p ] of Object.entries(s.val())) {
              if (
                p.lastAttempt + Math.round(p.nextInterval * 1.6 * ten) <
                currentDate
              ) {
                userRef.child(`puzzlesSolved/${key}`).update({
                  shouldBeReviewed: true,
                });
              }
            }
          }
        });
    }
  };
  handleReview = puzzlesToReview => {
    this.props.setCurrentWorkout(puzzlesToReview);
  };

  render() {
    const { puzzlesToReview } = this.state;
    return (
      <nav className="header navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo navbar-brand">
          <Link to="/">
            <h1>Fredfy</h1>
            <h2>Learn_</h2>
          </Link>
        </div>
        <div>
          {puzzlesToReview ? (
            <Link
              to={"/review"}
              onClick={() => {
                this.handleReview(puzzlesToReview);
              }}
            >
              {" "}
              review -> {puzzlesToReview.length}
            </Link>
          ) : (
            <pre>review</pre>
          )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            {this.props.isAuthenticated ? (
              <div>
                <Link to="/account">
                  <button>Account</button>
                </Link>
                <button onClick={this.handleLogout}>Logout</button>
              </div>
            ) : (
              <button
                onClick={() => {
                  this.props.setIsLoginModalOpen(true);
                }}
              >
                Connect
              </button>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  setIsLoginModalOpen: isLoginModalOpen =>
    dispatch(setIsLoginModalOpen(isLoginModalOpen)),
  setChallenge: challenges => dispatch(setChallenge(challenges)),
  setCurrentWorkout: currentWorkout =>
    dispatch(setCurrentWorkout(currentWorkout)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
