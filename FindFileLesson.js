var path = require('path');
var fs = require('fs');

var input = process.argv;

if (input.length != 4) {
	console.log('Please insert 2 addtional params');
	return;
}
var filePath = path.join(input[3], input[2]);
//console.log('File path: ' + filePath);
try {
	var fileStat = fs.statSync(filePath);
	if(fileStat.isFile()) {
		console.log('Find one');
	} else if(fileStat.isDirectory()) {
		console.log('Existing but not matching type');
	} else {
		console.log('Spend more time to find out what input is');
	}
} catch (e) {
	console.log('Ooops!!!' + e.message);
}