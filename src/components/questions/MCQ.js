import React from 'react';

export default class MCQ extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      section: '',
      type: 'mcq',
      title: '',
      options: {
        optionOne: '',
        optionTwo: '',
        optionThree: '',
        optionFour: ''
      },
      error: ''
    };
  }

  onSectionChange = (e) => {
    const section = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        section
    }));
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        title
    }));
  };

  onOptionOneChange = (e) => {
    const optionOne = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        options: {
          ...previousState.options,
          optionOne
        }
    }));
  };

  onOptionTwoChange = (e) => {
    const optionTwo = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        options: {
          ...previousState.options,
          optionTwo
        }
    }));
  };

  onOptionThreeChange = (e) => {
    const optionThree = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        options: {
          ...previousState.options,
          optionThree
        }
    }));
  };

  onOptionFourChange = (e) => {
    const optionFour = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        options: {
          ...previousState.options,
          optionFour
        }
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { section, type, title } = this.state;
    const { optionOne, optionTwo, optionThree, optionFour } = this.state.options;

    if (!section || !title || !optionOne || !optionTwo || !optionThree || !optionFour) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }) );
      this.props.onSubmit({
        section,
        type,
        title,
        options: {
          optionOne,
          optionTwo,
          optionThree,
          optionFour
        }
      });
    }

  };


// CHECK THIS
  // title = () => {
  //   this.ref
  // }

  render() {
    const { section, title, options } = this.state;
    return (
      <div className='page-container'>
        <form className='add-questions-form' onSubmit={this.onSubmit}>

          {this.state.error && <p className='form__error'>{this.state.error}</p> }

          <select id='' value={section} onChange={this.onSectionChange}>
            <option value=''>-- select an option --</option>
            <option value='variables'>Variables</option>
            <option value='functions'>Functions</option>
            <option value='objects'>Objects</option>
            <option value='arrays'>Arrays</option>
          </select>

          <input
            type='text'
            placeholder='Title'
            // CHECK THIS
            // ref='title'
            value={title}
            onChange={this.onTitleChange}
          />

          <input
            type='text'
            placeholder='Option one - CORRECT ONE'
            value={options.optionOne}
            onChange={this.onOptionOneChange}
          />
          <input
            type='text'
            placeholder='Option two'
            value={options.optionTwo}
            onChange={this.onOptionTwoChange}
          />
          <input
            type='text'
            placeholder='Option three'
            value={options.optionThree}
            onChange={this.onOptionThreeChange}
          />
          <input
            type='text'
            placeholder='Option four'
            value={options.optionFour}
            onChange={this.onOptionFourChange}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}
