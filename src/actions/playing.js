export const setIsPlaying = isPlaying => ({
  type: "SET_IS_PLAYING",
  isPlaying
});

export const setShuffledQuestions = shuffledQuestions => ({
  type: "SET_SHUFFLED_QUESTIONS",
  shuffledQuestions
});

export const setShuffledOptions = shuffledOptions => ({
  type: "SET_SHUFFLED_OPTIONS",
  shuffledOptions
});

export const setQuestionsAnswered = questionsAnswered => ({
  type: "SET_QUESTIONS_ANSWERED",
  questionsAnswered
});
