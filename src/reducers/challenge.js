export default (state = challengeReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_CHALLENGE":
      return {
        ...state,
        challege: action.challenge
      };
    default:
      return state;
  }
};

const challengeReducerDefaultState = {
  currentPuzzle: {
    code: "\nvar sleepIn = function(weekday, vacation){ \n\n}",
    description: [
      "The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in."
    ],
    section: "warmup-1",
    name: "sleepIn",
    inputs: [ "(true, true)", "(true, false)", "(false, true)", "(false, false)" ],
    solutions: "function (weekday, vacation) {\n  return !weekday || vacation;\n}"
  },
  currentChallenges: ""
};
