// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setIsLoginModalOpen } from "../../actions/navigation";
import { setPuzzlesToReview } from "../../actions/user";

import database, { firebase } from "../../firebase/firebase";

class Header extends React.Component {
  handleLogout() {
    console.log("handle clicked");
    firebase.auth().signOut();
    console.log("after sign out");
  }
  componentDidMount = () => {
    const { userId } = this.props;
    const currentDate = new Date().getTime();
    const userRef = database.ref(`users/${userId}/`);
    userRef.child("puzzlesSolved").orderByValue().once("value", s => {
      const data = s.val();
      if (data) {
        const oneMinute = 10 * 1000;
        Object.values(data).forEach(p => {
          if (!p.isTobeReviewed) {
            if (
              p.lastAttempt +
                Math.round(p.numberOfTimesSolved * 1.6 * oneMinute) <
              currentDate
            ) {
              userRef.child("puzzlesToReview").push(p);
            }
          }
        });
      } else {
        console.log("no");
      }
    });
  };

  render() {
    return (
      <nav className="header navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo navbar-brand">
          <Link to="/">
            <h1>Fredfy</h1>
            <h2>Learn_</h2>
          </Link>
        </div>
        {/* <div>{console.log(this.props.puzzlesToReview)}</div>
        <div>{console.log(this.props.puzzlesSolved)}</div> */}
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
  puzzlesToReview: state.user.puzzlesToReview,
  puzzlesSolved: state.user.puzzlesSolved,
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  setIsLoginModalOpen: isLoginModalOpen =>
    dispatch(setIsLoginModalOpen(isLoginModalOpen)),
  setPuzzlesToReview: currentDate => dispatch(setPuzzlesToReview(currentDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
