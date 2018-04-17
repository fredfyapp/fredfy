export const setChallenge = challenges => ({
  type: "SET_CHALLENGE",
  challenges,
});

export const setCurrentPuzzle = currentPuzzle => ({
  type: "SET_CURRENT_PUZZLE",
  currentPuzzle,
});

export const setUserCode = userCode => ({
  type: "SET_USERCODE",
  userCode,
});

export const setCurrentWorkout = currentWorkout => ({
  type: "SET_CURRENT_WORKOUT",
  currentWorkout,
});
