// ********** REACT ********** //
import React from "react";
import Modal from "react-modal";

// ********** REDUX ********** //
import { connect } from "react-redux";

// ********** ACTIONS ********** //
import { setIsLoginModalOpen } from "../../actions/navigation";

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
      <h2>test</h2>
    </Modal>
  );
};

const mapStateToProps = state => ({
  isLoginModalOpen: state.navigation.isLoginModalOpen
});

const mapDispatchToProps = dispatch => ({
  setIsLoginModalOpen: isLoginModalOpen =>
    dispatch(setIsLoginModalOpen(isLoginModalOpen))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
