const questionsReducerDefaultState = [];

export default (state = questionsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return [
        ...state,
        action.question
      ];
    default:
      return state;
  }
};
