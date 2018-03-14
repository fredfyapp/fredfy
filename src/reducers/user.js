import userReducerDefaultState from './userReducerDefaultState';

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.user
      };
    case 'SET_CHOSEN_CHARACTER': {
      let subject = action.subject;
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [subject]: {
            ...state.subjects[subject],
            character: action.character
          }
        }
      }
    }
    default:
      return state;
  }
};
