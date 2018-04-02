const playingReducerDefaultState = {
  isPlaying: false,
  questionsAnswered: 0,
  shuffledQuestions: [],
  shuffledOptions: []
};

export default (state = playingReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_IS_PLAYING':
      return {
        //NOT SPREADING STATE, SO IT WILL GO BACK TO DEFAULT EVERY TIME
        ...state,
        isPlaying: action.isPlaying,
        questionsAnswered: 0
      };
    case 'SET_QUESTIONS_ANSWERED':
      return {
        ...state,
        questionsAnswered: action.questionsAnswered
      };
    case 'SET_SHUFFLED_QUESTIONS':
    return {
      ...state,
      shuffledQuestions: action.shuffledQuestions
    }
    default:
      return state;
  }
};
