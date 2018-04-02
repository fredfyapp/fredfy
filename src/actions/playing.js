export const setIsPlaying= (bool) => ({
  type: 'SET_IS_PLAYING',
  isPlaying: bool
});

export const setQuestionAnswered = (value) => ({
  type: 'SET_QUESTION_ANSWERED',
  questionsAnswered: value
});
