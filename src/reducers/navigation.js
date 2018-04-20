const navigationReducerDefaultState = {
  chosenWorld: {
    subject: '',
    sections: [],
    challenges: []
  }
};

export default (state = navigationReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CHOSEN_WORLD':
      return {
        ...state,
        chosenWorld: action.chosenWorld
      };
    default:
      return state;
  }
};
