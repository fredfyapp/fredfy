export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.user
      };
    case 'SET_CHOSEN_CHARACTER':
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
    case 'SET_FINISHED_SECTION':
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
    default:
      return state;
  }
};

const userReducerDefaultState = {
  "userId": "",
  "username": "",
  "totalPoints": 0,
  "subjects": {
    "html": {
      "points": 10,
      "character": "Fred",
      "isFinished": true,
      "finishedSections": {},
      "finishedChallenges": {}
    },
    "css": {
      "points": 30,
      "character": "Fred",
      "isFinished": false,
      "finishedSections": {
        "colors": false,
        "fonts": true,
        "images": false
      },
      "finishedChallenges": {
        "one": false
      }
    },
    "javascript": {
      "points": 10,
      "character": "",
      "isFinished": false,
      "finishedSections": {},
      "finishedChallenges": {}
    }
  }
};
