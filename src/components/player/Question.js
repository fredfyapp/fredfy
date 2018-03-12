// ********** REACT ********** //
import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
  return (
    <div>
      <h2>{question.title}</h2>
      {
        question.options.map((option, index) => {
          return (
            <div key={question.title, option}>
              <input type='radio' name='option' value={index} />
              <label htmlFor={index}>{option}</label>
            </div>
          );
        })
      }
    </div>
  );
}

Question.propTypes = {
  // : PropTypes.
};

export default Question;
