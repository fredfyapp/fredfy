import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_QUESTION_MCQ
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddQuestionMCQ = (questionMCQ = {}) => {
  return (dispatch) => {
    const { section, title, options } = questionMCQ;
    const question = { section, title, options };

    return database.ref(`questionsMCQ`).push(question).then((ref) => {
      dispatch(addQuestion({
        id: ref.key,
        ...question
      }));
    });
  };
};
