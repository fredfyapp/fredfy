import React from 'react';

export default class MCQ extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subject: '',
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

  onSubjectChange = (e) => {
    const subject = e.target.value;
    this.setState((previousState) => ({
      ...previousState,
        subject
    }));
  };

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

    const { subject, section, type, title } = this.state;
    const { optionOne, optionTwo, optionThree, optionFour } = this.state.options;

    if (
      !subject ||
      !section ||
      !title ||
      !optionOne ||
      !optionTwo ||
      !optionThree ||
      !optionFour
    ) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: '' }) );
      this.props.onSubmit({
        subject,
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
    const { subject, section, title, options } = this.state;
    return (
      <div className='page-container'>
        <form className='add-questions-form' onSubmit={this.onSubmit}>

          {this.state.error && <p className='form__error'>{this.state.error}</p> }

          <select id='' value={subject} onChange={this.onSubjectChange}>
            <option value=''>-- select subject--</option>
            <option value='html'>HTML</option>
            <option value='css'>CSS</option>
            <option value='javascript'>JavaScript</option>
          </select>

          <select id='' value={section} onChange={this.onSectionChange}>
            <option value=''>-- select section --</option>
            <option value='' disabled>-- HTML --</option>
            <option value='forms'>Forms</option>
            <option value='div'>Div</option>
            <option value='anchor'>Anchor</option>
            <option value='' disabled>-----------</option>
            <option value='' disabled>-- CSS --</option>
            <option value='colors'>Colors</option>
            <option value='fonts'>Fonts</option>
            <option value='images'>Images</option>
            <option value='' disabled>-----------</option>
            <option value='' disabled>-- JAVASCRIPT --</option>
            <option value='variables'>Variables</option>
            <option value='functions'>Functions</option>
            <option value='objects'>Objects</option>

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
