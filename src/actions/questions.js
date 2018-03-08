// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_QUESTION_MCQ
export const addQuestion = (question) => ({
  type: 'ADD_QUESTION',
  question
});

export const startAddQuestion = (question = {}) => {
  return (dispatch) => {
    const { subject, section, type, title, options } = question;
    const questionData = { type, title, options };

    return database.ref(`questions/${subject}/${section}`).push(questionData).then((ref) => {
      dispatch(addQuestion({
        id: ref.key,
        ...questionData
      }));
    });
  };
};

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
});

export const startSetQuestions = () => {
  return (dispatch, getState) => {
    return database.ref(`questions`).once('value').then((snapshot) => {
      const questions = [];
      snapshot.forEach((childSnapshot) => {
        questions.push({
          id: childSnapshot.key,
          sections: {
            ...childSnapshot.val()
          }
        });
      });
      dispatch(setQuestions(questions));
    });
  };
};
