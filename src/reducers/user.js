export default (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: action.user
      };
    case 'SET_CHOSEN_CHARACTER': {
      let subject = action.subject;
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [subject]: {
            ...state.subjects[subject],
            character: action.character
          }
        }
      }
    }
    default:
      return state;
  }
};

const userReducerDefaultState = {
  "userId": "",
  "userName": "",
  "totalPoints": 0,
  "subjects": {
    "html": {
      "points": 10,
      "character": "Fred",
      "isCompleted": false,
      "sectionsCompleted": {
        "htmlSection1": false,
        "htmlSection2": false,
        "htmlSection3": false
      },
      "challengesCompleted": {
        "htmlSection1": false,
        "htmlSection2": false,
        "htmlSection3": false
      }
    },
    "css": {
      "points": 20,
      "character": "",
      "isCompleted": false,
      "sectionsCompleted": {
        "cssSection1": false,
        "cssSection2": false,
        "cssSection3": false
      },
      "challengesCompleted": {
        "cssSection1": false,
        "cssSection2": false,
        "cssSection3": false
      }
    },
    "javascript": {
      "points": 5,
      "character": "",
      "isCompleted": false,
      "sectionsCompleted": {
        "javascriptSection1": false,
        "javascriptSection2": false,
        "javascriptSection3": false
      },
      "challengesCompleted": {
        "javascriptSection1": false,
        "javascriptSection2": false,
        "javascriptSection3": false
      }
    }
  }
};
