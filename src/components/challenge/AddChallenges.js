import React, { Component } from "react";
import database from "../../firebase/firebase";

class AddChallenges extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "challenges",
      section: "",
      code: "",
      description: "",
      task: "",
      inputs: "",
      solution: "",
      name: "",
    };
  }
  componentDidMount = () => {
    const challenges = database.ref("challenges/basic javascript/");
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      type,
      section,
      name,
      code,
      description,
      task,
      inputs,
      solutions,
    } = this.state;
    const challenges = database.ref("challenges/variables/");
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.type === "challenges") {
      const i = inputs.split(" ");
      const newPuzzle = {
        code,
        description,
        task,
        inputs: i,
        solutions,
        section: "Interview Questions - Grider's bootcamp",
        name,
      };
    } else if (this.state.type === "mcq") {
      const newPuzzle = {
        name,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        section,
      };
    }
    challenges.push(newPuzzle);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        {this.state.type === "challenges" ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={this.handleSubmit}
            >
              <label>
                name:
                <textArea
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                section:
                <textArea
                  type="text"
                  name="section"
                  value={this.state.section}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                code:
                <textArea
                  type="text"
                  name="code"
                  value={this.state.code}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                description:
                <textArea
                  type="text"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </label>
              <label>
                task:
                <textArea
                  type="text"
                  name="task"
                  value={this.state.task}
                  onChange={e => this.handleChange(e)}
                />
              </label>
              <label>
                inputs:
                <textArea
                  type="text"
                  name="inputs"
                  value={this.state.inputs}
                  onChange={e => this.handleChange(e)}
                />
              </label>
              <label>
                solutions:
                <textArea
                  type="text"
                  name="solution"
                  value={this.state.solution}
                  onChange={e => this.handleChange(e)}
                />
              </label>
            </form>
          </div>
        ) : (
          <div>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={this.handleSubmit}
            >
              <label>
                name:
                <textArea
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                option one:
                <textArea
                  type="text"
                  name="OptionOne"
                  value={this.state.optionOne}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                option two:
                <textArea
                  type="text"
                  name="OptionThree"
                  value={this.state.optionTwo}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                option three:
                <textArea
                  type="text"
                  name="OptionThree"
                  value={this.state.optionThree}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                option four:
                <textArea
                  type="text"
                  name="OptionThree"
                  value={this.state.optionFour}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                section:
                <textArea
                  type="text"
                  name="section"
                  value={this.state.section}
                  onChange={this.handleChange}
                />
              </label>
            </form>
          </div>
        )}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick a question type
              <select
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
              >
                <option value="mcq">mcq</option>
                <option value="challenges">challenges</option>
                <option value="fg">fg</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddChallenges;
