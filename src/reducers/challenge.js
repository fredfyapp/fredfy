export default (state = challengeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHALLENGE":
      return {
        ...state,
        currentChallenges: action.challenges
      };
    default:
      return state;
  }
};

const challengeReducerDefaultState = {
  currentPuzzle: {},
  currentChallenges: ""
};
