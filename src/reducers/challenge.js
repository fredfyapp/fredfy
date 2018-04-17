export default (state = challengeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHALLENGE":
      return {
        ...state,
        currentChallenges: action.challenges,
      };
    case "SET_CURRENT_PUZZLE":
      return {
        ...state,
        currentPuzzle: action.currentPuzzle,
      };
    case "SET_USERCODE":
      return {
        ...state,
        userCode: action.userCode,
      };
    case "SET_CURRENT_WORKOUT":
      return {
        ...state,
        currentWorkout: action.currentWorkout,
      };
    default:
      return state;
  }
};

const challengeReducerDefaultState = {
  currentPuzzle: {},
  currentChallenges: "",
  userCode: "",
  currentWorkout: [],
};
