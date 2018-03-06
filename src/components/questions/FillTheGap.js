// import React from 'react';
//
// export default class AddQuestion extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       category: 'mcq',
//       questionData: {
//         type: 'variables',
//         title: '',
//         correctAnswer: '',
//         options: {
//           one: '',
//           two: '',
//           three: '',
//           four: ''
//         }
//       }
//     };
//   }
//
//   onCategoryChange  = (e) => {
//     const category = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       category
//     }));
//   };
//
//   onTypeChange = (e) => {
//     const type = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         type
//       }
//     }));
//     console.log(e.target.value);
//   };
//
//   onTitleChange = (e) => {
//     const title = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         title
//       }
//     }));
//   };
//
//   onCorrectAnswerChange = (e) => {
//     const correctAnswer = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         correctAnswer
//       }
//     }));
//   };
//
//   onOptionOneChange = (e) => {
//     const chosenOption = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         options: {
//           ...previousState.questionData.options,
//           one: chosenOption
//         }
//       }
//     }));
//   };
//
//   onOptionTwoChange = (e) => {
//     const chosenOption = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         options: {
//           ...previousState.questionData.options,
//           two: chosenOption
//         }
//       }
//     }));
//   };
//
//   onOptionThreeChange = (e) => {
//     const chosenOption = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         options: {
//           ...previousState.questionData.options,
//           three: chosenOption
//         }
//       }
//     }));
//   };
//
//   onOptionFourChange = (e) => {
//     const chosenOption = e.target.value;
//     this.setState((previousState) => ({
//       ...previousState,
//       questionData: {
//         ...previousState.questionData,
//         options: {
//           ...previousState.questionData.options,
//           four: chosenOption
//         }
//       }
//     }));
//   };
//
//   onSubmit = (e) => {
//     e.preventDefault();
//
//     console.log(this.state);
//   };
//   render() {
//     const { type, title, correctAnswer, options } = this.state.questionData;
//     return (
//       <div className='page-container'>
//         <form className='add-questions-form' onSubmit={this.onSubmit}>
//
//           <select className='' onChange={this.onCategoryChange}>
//             <option value="mcq">MCQ</option>
//             <option value="fillTheGap" disabled="disabled">Fill the gap</option>
//           </select>
//
//           <select className='' value={type} onChange={this.onTypeChange}>
//             <option value="variables">Variables</option>
//             <option value="functions">Functions</option>
//             <option value="objects">Objects</option>
//             <option value="arrays">Arrays</option>
//           </select>
//
//           <input
//             type='text'
//             placeholder='Title'
//             value={title}
//             onChange={this.onTitleChange}
//           />
//
//           <input
//             type='text'
//             placeholder='Correct Answer'
//             value={correctAnswer}
//             onChange={this.onCorrectAnswerChange}
//           />
//
//           <input
//             type='text'
//             placeholder='Option one - CORRECT ONE'
//             value={options.one}
//             onChange={this.onOptionOneChange}
//           />
//           <input
//             type='text'
//             placeholder='Option two'
//             value={options.two}
//             onChange={this.onOptionTwoChange}
//           />
//           <input
//             type='text'
//             placeholder='Option three'
//             value={options.three}
//             onChange={this.onOptionThreeChange}
//           />
//           <input
//             type='text'
//             placeholder='Option four'
//             value={options.four}
//             onChange={this.onOptionFourChange}
//           />
//
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
