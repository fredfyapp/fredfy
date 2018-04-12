const navigationReducerDefaultState = {
  chosenSubject: "",
  isLoginModalOpen: false
};

export default (state = navigationReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHOSEN_SUBJECT":
      return {
        ...state,
        chosenSubject: action.chosenSubject
      };
    case "SET_IS_LOGIN_MODAL_OPEN":
      return {
        ...state,
        isLoginModalOpen: action.isLoginModalOpen
      };
    default:
      return state;
  }
};
