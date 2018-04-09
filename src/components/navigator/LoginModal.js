// ********** REACT ********** //
import React from "react";
import Modal from "react-modal";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setIsLoginModalOpen } from "../../actions/navigation";
import { startGoogleLogin, startFacebookLogin } from "../../actions/auth";

const LoginModal = props => {
  return (
    <Modal
      isOpen={props.isLoginModalOpen}
      onRequestClose={() => {
        props.setIsLoginModalOpen(false);
      }}
      contentLabel="Selected option"
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="login-modal">
      <button onClick={props.startGoogleLogin}>Connect with Google</button>
      <button onClick={props.startFacebookLogin}>Connect with Facebook</button>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isLoginModalOpen: state.navigation.isLoginModalOpen
});

const mapDispatchToProps = dispatch => ({
  setIsLoginModalOpen: isLoginModalOpen =>
    dispatch(setIsLoginModalOpen(isLoginModalOpen)),
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
