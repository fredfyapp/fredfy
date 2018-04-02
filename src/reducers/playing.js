const playingReducerDefaultState = {
  isPlaying: false,
  shuffledQuestions: [],
  shuffledOptions: []
};

export default (state = playingReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    case 'SET_SHUFFLED_QUESTIONS':
    return {
      ...state,
      shuffledQuestions: action.shuffledQuestions
    };
    case 'SET_SHUFFLED_OPTIONS':
    return {
      ...state,
      shuffledOptions: action.shuffledOptions
    };
    default:
      return state;
  }
};
