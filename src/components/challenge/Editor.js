import React, { Component } from "react";
import AceEditor from "react-ace";

// redux
import { connect } from "react-redux";
import { setUserCode } from "../../actions/challenge";

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
      vim: true,
    };
  }

  componentWillReceiveProps = nextProps => {
    const value = nextProps.code;
    if (!this.state.value) {
      this.setState({
        value,
      });
    }
  };

  componentDidMount() {
    var value = this.props.code;
    this.setState({
      value,
    });
  }

  keybindingSwitcher = e => {
    e.preventDefault();
    this.setState({
      vim: !this.state.vim,
    });
  };

  themeSwitcher = e => {
    e.preventDefault();
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };

  onChange = newValue => {
    this.setState({
      value: newValue,
    });
  };

  runCode = () => {
    this.props.setUserCode(this.state.value);
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
            fontFamily="monaco"
            fontSize="12pt"
            focus
            cursorStart={3}
            height="350px"
            keyboardHandler={vim ? "vim" : ""}
            theme={darkMode ? "monokai" : "chrome"}
            name="Editor"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              this.runCode();
            }}
          >
            Run code
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCode: state.challenge.userCode,
});

const mapDispatchToProps = dispatch => ({
  setUserCode: userCode => dispatch(setUserCode(userCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
