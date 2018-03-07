// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_QUESTION_MCQ
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddQuestion = (question = {}) => {
  return (dispatch) => {
    const { section, type, title, options } = question;
    const questionData = { type, title, options };

    return database.ref(`questions/${section}`).push(questionData).then((ref) => {
      dispatch(addQuestion({
        id: ref.key,
        ...questionData
      }));
    });
  };
};
