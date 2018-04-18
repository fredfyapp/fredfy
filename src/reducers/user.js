import database from "../firebase/firebase";

export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...action.user
      };
    case "SET_CHOSEN_CHARACTER":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            character: action.character
          }
        }
      };
    case "SET_FINISHED_SECTION":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            finishedSections: {
              ...state.subjects[action.subject].finishedSections,
              [action.section]: true
            }
          }
        }
      };
    case "SET_FINISHED_SUBJECT":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            isFinished: action.bool
          }
        }
      };
    case "SET_SUBJECT_POINTS":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            points: action.points
          }
        }
      };
    case "SET_TOTAL_POINTS":
      return {
        ...state,
        totalPoints: action.points
      };
    case "SET_PUZZLES_TO_REVIEW":
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const tenSeconds = 10 * 1000;

      let newPuzzlesToReview = [];
      const puzzlesSolved = [...state.puzzlesSolved];
      puzzlesSolved.forEach((puzzle, index) => {
        if (puzzle.lastAttempt + tenSeconds < action.currentDate) {
          puzzle.lastAttempt = action.currentDate;
          newPuzzlesToReview.push(puzzle);
        }
      });
      if (newPuzzlesToReview[0] === undefined) {
        return {
          ...state
        };
      }
      // console.log(newPuzzlesToReview);
      return {
        ...state,
        puzzlesToReview: [...state.puzzlesToReview, ...newPuzzlesToReview]
      };
    case "SET_PUZZLE_SOLVED":
      const hasBeenSolved = state.puzzlesSolved.findIndex((p, k) => {
        return p.name === action.puzzle.name;
      });
      if (hasBeenSolved === -1) {
        const newPuzzleSolved = {
          ...action.puzzle,
          lastAttempt: action.currentDate,
          numberOfTimesSolved: 1
        };
        return {
          ...state,
          puzzlesSolved: [...state.puzzlesSolved, newPuzzleSolved]
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};

const userReducerDefaultState = {
  userId: "",
  username: "",
  totalPoints: 0,
  puzzlesToReview: [],
  puzzlesSolved: [],
  subjects: {
    html: {
      points: 0,
      character: "",
      isFinished: false,
      finishedSections: {
        one: false,
        two: false
      },
      finishedChallenges: {}
    },
    css: {
      points: 0,
      character: "",
      isFinished: false,
      finishedSections: {
        colours: false,
        fonts: false,
        images: false
      },
      finishedChallenges: {
        one: false
      }
    },
    javascript: {
      points: 0,
      character: "",
      isFinished: false,
      finishedSections: {},
      finishedChallenges: {}
    }
  }
};

// DEFAULT STATE WITH SOME DATA FILLED
// const userReducerDefaultState = {
//   userId: "",
//   username: "",
//   totalPoints: 50,
//   subjects: {
//     html: {
//       points: 10,
//       character: "Fred",
//       isFinished: false,
//       finishedSections: {
//         one: true,
//         two: true
//       },
//       finishedChallenges: {}
//     },
//     css: {
//       points: 30,
//       character: "Fred",
//       isFinished: false,
//       finishedSections: {
//         colours: false,
//         fonts: true,
//         images: true
//       },
//       finishedChallenges: {
//         one: false
//       }
//     },
//     javascript: {
//       points: 10,
//       character: "",
//       isFinished: false,
//       finishedSections: {},
//       finishedChallenges: {}
//     }
//   }
// };
