// ********** DATABASE ********** //
import database from "../firebase/firebase";

export const setUser = user => ({
  type: "SET_USER",
  user
});

export const setChosenCharacter = (character, subject) => ({
  type: "SET_CHOSEN_CHARACTER",
  character,
  subject
});

export const setFinishedSection = (subject, section) => ({
  type: "SET_FINISHED_SECTION",
  subject,
  section
});

export const setFinishedSubject = (subject, bool) => ({
  type: "SET_FINISHED_SUBJECT",
  subject,
  bool
});

export const startSetFinishedSubject = (subject, bool) => {
  (dispatch, getState) => {
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
  points
});

export const setTotalPoints = points => ({
  type: "SET_TOTAL_POINTS",
  points
});
