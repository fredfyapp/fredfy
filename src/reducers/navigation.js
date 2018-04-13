const navigationReducerDefaultState = {
  chosenSubject: "",
  isLoginModalOpen: false,
  isAppRunning: false
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
    case "SET_IS_APP_RUNNING":
      return {
        ...state,
        isAppRunning: action.isAppRunning
      };
    default:
      return state;
  }
};
