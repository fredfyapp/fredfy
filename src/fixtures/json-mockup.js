export default {
  "learning": [
    {
     "subject": "html",
     "sections": [],
     "challenges": []
    },
    {
      "subject": "css",
      "sections": [
        {
          "sectionName": "colors",
          "explanation": "Color (American English) or colour (Commonwealth English) is the characteristic of human visual perception described through color categories, with names such as red, orange, yellow, green, blue, or purple. This perception of color derives from the stimulation of cone cells in the human eye by electromagnetic radiation in the visible spectrum.",
          "questions": [
            {
              "title": "What is color?",
              "options": [
                {
                  "isCorrect": true,
                  "answer": "answer one"
                },
                {
                  "isCorrect": false,
                  "answer": "answer two"
                },
                {
                  "isCorrect": false,
                  "answer": "answer three"
                },
                {
                  "isCorrect": false,
                  "answer": "answer four"
                },
              ]
            },
            {
              "title": "How to change the color?",
              "options": [
                {
                  "isCorrect": true,
                  "answer": "answer one"
                },
                {
                  "isCorrect": false,
                  "answer": "answer two"
                },
                {
                  "isCorrect": false,
                  "answer": "answer three"
                },
                {
                  "isCorrect": false,
                  "answer": "answer four"
                },
              ]
            },
            {
              "title": "How to increase opacity?",
              "options": [
                {
                  "isCorrect": true,
                  "answer": "answer one"
                },
                {
                  "isCorrect": false,
                  "answer": "answer two"
                },
                {
                  "isCorrect": false,
                  "answer": "answer three"
                },
                {
                  "isCorrect": false,
                  "answer": "answer four"
                },
              ]
            }
          ]
        },
        {
          "sectionName": "fonts",
          "questions": []
        },
        {
          "sectionName": "images",
          "questions": []
        }
      ],
      "challenges": [
        {
          "challengeTitle": "Building a portfolio",
          "challengeExplanation": "Now you should build a portfolio with the techniques you learned",
          "expectedOutput": "<div>portfolio</div>"
        }
      ]
    },
    {
      "subject": "javascript",
      "sections": [],
      "challenges": []
    }
  ],
  "users": [
    {
      "userId": "1234",
			"username": "Marcel",
      "totalPoints": 22,
      "subjects": {
				"html": {
					"points": 10,
					"character": "Fred",
		      "isCompleted": true,
		      "sectionsCompleted": {
		        "htmlSection1": true,
		        "htmlSection2": true,
		        "htmlSection3": true
		      },
          "challengesCompleted": {
            "htmlSection1": true,
            "htmlSection2": true,
            "htmlSection3": true
          }
				},
        "css": {
					"points": 12,
					"character": "Chloe",
		      "isCompleted": false,
		      "sectionsCompleted": {
		        "cssSection1": true,
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
					"points": 0,
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
				} // javascript
      } // subjects
    }, // user 1
    {
      "userId": "5678",
			"username": "Cruz",
      "totalPoints": 43,
      "subjects": {
				"html": {
					"points": 13,
					"character": "Fred",
		      "isCompleted": true,
		      "sectionsCompleted": {
		        "htmlSection1": true,
		        "htmlSection2": true,
		        "htmlSection3": true
		      },
          "challengesCompleted": {
            "htmlSection1": true,
            "htmlSection2": true,
            "htmlSection3": true
          }
				},
        "css": {
					"points": 30,
					"character": "Chloe",
		      "isCompleted": false,
		      "sectionsCompleted": {
		        "cssSection1": true,
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
					"points": 0,
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
				} // javascript
      } // subjects
    } // user 2
  ], // uses array
	"characters": [
		{
			"name": "Fred"
		},
		{
			"name": "Chloe"
		},
		{
			"name": "Greg"
		},
		{
			"name": "Piu"
		},
		{
			"name": "Ciara"
		},
		{
			"name": "Liz"
		}
	]
};
