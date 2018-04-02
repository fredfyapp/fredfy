export const setIsPlaying= (isPlaying) => ({
  type: 'SET_IS_PLAYING',
  isPlaying
});

export const setQuestionsAnswered = (questionsAnswered) => ({
  type: 'SET_QUESTIONS_ANSWERED',
  questionsAnswered
});

export const setShuffledQuestions = (shuffledQuestions) => ({
  type: 'SET_SHUFFLED_QUESTIONS',
  shuffledQuestions
});
