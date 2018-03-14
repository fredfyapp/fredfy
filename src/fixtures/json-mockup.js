const database = {
  "learning": [
    {
      "subject": "css",
      "sections": [
        {
          "sectionName": "colors",
          "explanation": "Color (American English) or colour (Commonwealth English) is the characteristic of human visual perception described through color categories, with names such as red, orange, yellow, green, blue, or purple. This perception of color derives from the stimulation of cone cells in the human eye by electromagnetic radiation in the visible spectrum.",
          "questions": [
            {
              "title": "What is color?",
              "options": ["Option one", "Option two", "Option three", "Option four"]
            }
          ]
        }, {
          "sectionName": "fonts",
          "questions": []
        }, {
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
    }, {
      "subject": "html",
      "sections": [],
      "challenges": []
    }, {
      "subject": "javascript",
      "sections": [],
      "challenges": []
    }
  ],
  "users": [
    {
      "userId": "1234",
			"userName": "Marcel",
      "subjects": [
				{
					"subject": "css",
					"points": "23",
					"character": "Fred",
		      "isCompleted": false,
		      "sectionsCompleted": {
		        "colors": true,
		        "fonts": false,
		        "images": false
		      },
          "challengesCompleted": {
            "colors": true,
            "fonts": false,
            "images": false
          }
				},
				{
					"subject": "html",
					"points": "41",
					"character": "Chloe",
		      "isCompleted": true,
		      "sections": [{}],
				},
				{
					"subject": "javascript",
					"points": "0",
					"character": "",
		      "isCompleted": false,
		      "sections": [{}],
				}
			]
    }
  ],
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

export default database;
