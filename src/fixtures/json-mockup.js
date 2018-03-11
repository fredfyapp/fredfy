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
							"options": [
								"Option one",
								"Option two",
								"Option three",
								"Option four"
							]
						},
						{
							"title": "How do you change the color?",
							"options": [
								"Option one",
								"Option two",
								"Option three",
								"Option four"
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
			]
		},
		{
			"subject": "html",
			"sections": []
		},
		{
			"subject": "javascript",
			"sections": []
		}
	],
	"users": {
		"userId": "1234",
		"totalPoints": "000",
		"completed": {
			"css": false,
			"cssPoints": "20",
			"cssSections": {
				"colors": true,
				"fonts": false,
				"images": false
			},
			"html": true,
			"htmlPoints": "50",
			"htmlSections": {

			},
			"javascript": false,
			"javascriptPoits": "0",
			"javascriptSections": {

			},
		},
		"characters": {
			"css": "Fred",
			"html": "Chloe",
			"javascript": ""
		}
	}
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
