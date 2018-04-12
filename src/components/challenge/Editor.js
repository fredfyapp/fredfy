import React, { Component } from "react";
import AceEditor from "react-ace";

// redux

import { connect } from "react-redux";

// editor config
import "brace/mode/javascript";
import "brace/theme/monokai";
import "brace/theme/chrome";
import "brace/keybinding/vim";

// react-toggle style.css
// import "react-toggle/style.css";

// Modal config
import ModalConfig from "./ModalConfig";

let aceEditor = null;

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      darkMode: false,
      vim: false
    };
  }
  componentDidMount() {
    var value = this.props.code;
    this.setState({
      value
    });
  }
  keybindingSwitcher = e => {
    e.preventDefault();
    this.setState({
      vim: !this.state.vim
    });
  };
  themeSwitcher = e => {
    e.preventDefault();
    this.setState({
      darkMode: !this.state.darkMode
    });
  };

  loadNextChallenge = () => {};

  onChange = newValue => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { value, vim, darkMode } = this.state;
    return (
      <div>
        <ModalConfig
          theme={darkMode}
          themeSwitcher={this.themeSwitcher}
          themeLabel="Dark"
          keybinding={vim}
          keybindingSwitcher={this.keybindingSwitcher}
          keybindingLabel="VIM"
        />
        <div>
          <AceEditor
            value={value}
            mode="javascript"
            onChange={this.onChange}
            focus
            cursorStart={3}
            height="350px"
            keyboardHandler={vim ? "vim" : ""}
            theme={darkMode ? "monokai" : "chrome"}
            name="Editor"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPuzzle: state.challenge.currentPuzzle,
  currentChallenges: state.challenge.currentChallenges
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
