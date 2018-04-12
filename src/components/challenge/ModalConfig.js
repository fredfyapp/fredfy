import React from "react";
import Toggle from "react-toggle";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "200px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    // backgroundColor: 'grey',
    zIndex: "9998",
    background: "rgba(0,0,0,0.5)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#app");

class ModalConfig extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Editor Settings</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className="editor-config">
            <Toggler
              name={this.props.themeLabel}
              action={this.props.themeSwitcher}
              value={this.props.theme}
            />
            <Toggler
              name={this.props.keybindingLabel}
              action={this.props.keybindingSwitcher}
              value={this.props.keybinding}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

const Toggler = props => {
  return (
    <label>
      <span>{props.name}</span>
      <Toggle defaultChecked={props.value} onChange={props.action} />
    </label>
  );
};

export default ModalConfig;
