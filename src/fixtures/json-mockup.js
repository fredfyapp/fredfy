const database = {
  "learning": [
    {
      "subject": "css",
      "sections": [
        {
          "sectionName": "colors",
          "questions": [
            {
              "title": "What is color?",
              "options": ["Option one", "Option two", "Option three", "Option four"]
            }, {
              "title": "How do you change the color?",
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
      ]
    }, {
      "subject": "html",
      "sections": []
    }, {
      "subject": "javascript",
      "sections": []
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
		      "sections": {
		        "colors": true,
		        "fonts": false,
		        "images": false
		      },
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
					"points": "68",
					"character": "Piu",
		      "isCompleted": false,
		      "sections": [{}],
				}
			]
    },
		{
      "userId": "5678",
			"userName": "Cruz",
      "subjects": [
				{
					"subject": "css",
					"points": "73",
					"character": "Eric",
		      "isCompleted": false,
		      "sections": {
		        "colors": true,
		        "fonts": false,
		        "images": false
		      },
				},
				{
					"subject": "html",
					"points": "4",
					"character": "Kenny",
		      "isCompleted": true,
		      "sections": [{}],
				},
				{
					"subject": "javascript",
					"points": "8",
					"character": "Kyle",
		      "isCompleted": false,
		      "sections": [{}],
				}
			]
    }
  ]
};

export default database;

// const database = {
// 	"learning": [
// 		{
// 			"subject": "css",
// 			"isSubjectComplete": false,
// 			"sections": [
// 				{
// 					"sectionName": "colors",
// 					"isSectionComplete": false,
// 					"questions": [
// 						{
// 							"title": "What is color?",
// 							"options": [
// 								"Option one",
// 								"Option two",
// 								"Option three",
// 								"Option four"
// 							]
// 						},
// 						{
// 							"title": "How do you change the color?",
// 							"options": [
// 								"Option one",
// 								"Option two",
// 								"Option three",
// 								"Option four"
// 							]
// 						}
// 					]
// 				},
// 				{
// 					"sectionName": "fonts",
// 					"isSectionComplete": false,
// 					"questions": []
// 				},
// 				{
// 					"sectionName": "images",
// 					"isSectionComplete": false,
// 					"questions": []
// 				}
// 			]
// 		},
// 		{
// 			"subject": "html",
// 			"isSubjectComplete": false,
// 			"sections": []
// 		},
// 		{
// 			"subject": "javascript",
// 			"isSubjectComplete": false,
// 			"sections": []
// 		}
// 	],
// 	"users": [
// 		{
// 			"userId": "1234",
// 			"completed": [
// 				{
// 					"subject": "css",
// 					"isSubjectComplete": false,
// 					"sections": [
// 						{
// 							"sectionName": "colors",
// 							"isSectionComplete": true
// 						},
// 						{
// 							"sectionName": "fonts",
// 							"isSectionComplete": false
// 						},
// 						{
// 							"sectionName": "images",
// 							"isSectionComplete": false
// 						}
// 					]
// 				},
// 				{
// 					"subject": "html",
// 					"isSubjectComplete": true,
// 					"sections": []
// 				},
// 				{
// 					"subject": "javascript",
// 					"isSubjectComplete": false,
// 					"sections": []
// 				}
// 			]
// 		}
// 	]
// };
