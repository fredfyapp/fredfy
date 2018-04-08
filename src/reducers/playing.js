const playingReducerDefaultState = {
  isPlaying: false,
  questionsAnswered: 0,
  shuffledQuestions: [],
  shuffledOptions: []
};

export default (state = playingReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_IS_PLAYING":
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    case "SET_SHUFFLED_QUESTIONS":
      return {
        ...state,
        shuffledQuestions: action.shuffledQuestions
      };
    case "SET_SHUFFLED_OPTIONS":
      return {
        ...state,
        shuffledOptions: action.shuffledOptions
      };
    case "SET_QUESTIONS_ANSWERED":
      return {
        ...state,
        questionsAnswered: action.questionsAnswered
      };
    default:
      return state;
  }
};
