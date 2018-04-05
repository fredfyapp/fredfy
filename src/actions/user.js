export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setChosenCharacter = (character, subject) => ({
  type: 'SET_CHOSEN_CHARACTER',
  character,
  subject
});

export const setFinishedSection = (subject, section) => ({
  type: 'SET_FINISHED_SECTION',
  subject,
  section
});

export const setFinishedSubject = (subject, bool) => ({
  type: 'SET_FINISHED_SUBJECT',
  subject,
  bool
});
export const setPoints = (subject, points) => ({
  type: 'SET_POINTS',
  subject,
  points
});
