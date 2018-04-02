export const setIsPlaying= (bool) => ({
  type: 'SET_IS_PLAYING',
  isPlaying: bool
});

export const setQuestionsAnswered = (value) => ({
  type: 'SET_QUESTIONS_ANSWERED',
  questionsAnswered: value
});
