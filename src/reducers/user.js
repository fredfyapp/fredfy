export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.user,
      };
    case "SET_CHOSEN_CHARACTER":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            character: action.character,
          },
        },
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
              [action.section]: true,
            },
          },
        },
      };
    case "SET_FINISHED_SUBJECT":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            isFinished: action.bool,
          },
        },
      };
    case "SET_SUBJECT_POINTS":
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: {
            ...state.subjects[action.subject],
            points: action.points,
          },
        },
      };
    case "SET_TOTAL_POINTS":
      return {
        ...state,
        totalPoints: action.points,
      };
    default:
      return state;
  }
};

const userReducerDefaultState = {
  userId: "",
  username: "",
  totalPoints: 50,
  subjects: {
    html: {
      points: 10,
      character: "Fred",
      isFinished: false,
      finishedSections: {
        "Stage 1": true,
        "Stage 2": true,
      },
      finishedChallenges: {},
    },
    css: {
      points: 30,
      character: "Fred",
      isFinished: false,
      finishedSections: {
        "Stage 1": false,
        "Stage 2": true,
      },
      finishedChallenges: {
        one: false,
      },
    },
    javascript: {
      points: 10,
      character: "",
      isFinished: false,
      finishedSections: {
        "Stage 1": false,
        "Stage 2": true,
      },
      finishedChallenges: {},
    },
  },
};
