const navigationReducerDefaultState = {
  chosenSubject: ""
};

export default (state = navigationReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHOSEN_SUBJECT":
      return {
        ...state,
        chosenSubject: action.chosenSubject
      };
    default:
      return state;
  }
};
