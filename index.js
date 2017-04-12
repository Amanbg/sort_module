const arrayOfObjects = [   
	{
		name: 'Doris',
		born: 1373925600000,
		num: 4,
		sex: '1-1 male',
		cls : {
			born: 13739256
		}
	},
	{

		name: 'Beyonce',
		born: 1366832953000,
		num: 2,
		sex: '1-1-1 male',
		cls : {
			born: 1375256
		}
	},
	{            
		name: 'Albert',
		born: 1370288700000,
		num: 3,
		sex: '2-1-1 female',
		cls : {
			born: 1376
		}
	},    
	{
		name: 'Diana',
		born: 1354412087000,
		num: 1,
		sex: '2-1 male',
		cls : {
			born: 137
		}
	}
];
const sort_module = require('./sort_module.js')
console.log(sort_module(arrayOfObjects, 'num'))
