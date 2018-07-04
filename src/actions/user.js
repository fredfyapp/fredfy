// ********** DATABASE ********** //
import database from "../firebase/firebase";

export const setUser = user => ({
  type: "SET_USER",
  user,
});

export const setChosenCharacter = (subject, character) => ({
  type: "SET_CHOSEN_CHARACTER",
  subject,
  character,
});

export const startSetChosenCharacter = (subject, character) => {
  return (dispatch, getState) => {
    const uid = getState().user.userId;
    database
      .ref(`users/${uid}/subjects/${subject}`)
      .update({
        character,
        points: 0,
        isFinished: false,
      })
      .then(() => {
        dispatch(setChosenCharacter(subject, character));
      });
  };
};

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

export const startSetFinishedSubject = (subject, bool) => {
  return (dispatch, getState) => {
    const uid = getState().user.userId;
    database
      .ref(`users/${uid}/subjects/${subject}/isFinished`)
      .update(bool)
      .then(() => {
        dispatch(setFinishedSubject(subject, bool));
      });
  };
};

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
