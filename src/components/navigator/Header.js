// ********** REACT ********** //
import React from "react";
import { Link } from "react-router-dom";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { startLogout } from "../../actions/auth";
import { setIsLoginModalOpen } from "../../actions/navigation";

const Header = props => {
  return (
    <nav className="header navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo navbar-brand">
        <Link to="/">
          <h1>Fredfy</h1>
          <h2>Learn_</h2>
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          {props.isAuthenticated ? (
            <div>
              <Link to="/account">
                <button>Account</button>
              </Link>
              <button onClick={props.startLogout}>Logout</button>
            </div>
          ) : (
            <button
              onClick={() => {
                props.setIsLoginModalOpen(true);
              }}>
              Connect
            </button>
          )}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = dispatch => ({
  setIsLoginModalOpen: isLoginModalOpen =>
    dispatch(setIsLoginModalOpen(isLoginModalOpen)),
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
