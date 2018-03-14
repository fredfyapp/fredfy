export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const setChosenCharacter = (character, subject) => ({
  type: 'SET_CHOSEN_CHARACTER',
  character,
  subject
});
