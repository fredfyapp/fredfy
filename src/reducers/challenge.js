export default (state = challengeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHALLENGE":
      return {
        ...state,
        currentChallenges: action.challenges
      };
    case "SET_PUZZLE":
      return {
        ...state,
        currentPuzzle: action.puzzle
      };
    default:
      return state;
  }
};

const challengeReducerDefaultState = {
  currentPuzzle: {},
  currentChallenges: ""
};
