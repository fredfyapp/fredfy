export const setUser = user => ({
  type: "SET_USER",
  user,
});

export const setChosenCharacter = (character, subject) => ({
  type: "SET_CHOSEN_CHARACTER",
  character,
  subject,
});

export const setFinishedSection = (subject, section) => ({
  type: "SET_FINISHED_SECTION",
  subject,
  section,
});

export const setFinishedSubject = (subject, bool) => ({
  type: "SET_FINISHED_SUBJECT",
  subject,
  bool,
});

export const setSubjectPoints = (subject, points) => ({
  type: "SET_SUBJECT_POINTS",
  subject,
  points,
});

export const setTotalPoints = points => ({
  type: "SET_TOTAL_POINTS",
  points,
});

export const setPuzzleSolved = (puzzle, currentDate) => ({
  type: "SET_PUZZLE_SOLVED",
  puzzle,
  currentDate,
});

export const setPuzzlesToReview = currentDate => ({
  type: "SET_PUZZLES_TO_REVIEW",
  currentDate,
});
