var expectedResult = require('./../expected/expectedResult');

module.exports = {
    loginCredentials: {
        'username-Luke': {username: 'Luke', password: 'Skywalker', employeeName: 'souabhj null'}
    },
	
	invalidLogin: {
        'username-Sourabh': {username: 'Sourabh', password: 'Skywalker', errorMessage: expectedResult.expectedErros.invalidUser}
    },

	employeeDetails: {
		'FirstEmployee': {firstName: 'Mark', lastName: 'Smith'}
	},
	
	fileFormat: {
        'jpgFormat': {firstName: 'Mark7', lastName: 'Smith', formatToUpload: '../data/testFiles/jpgImage.jpg'},
		'pngFormat': {firstName: 'Mark8', lastName: 'Smith', formatToUpload: '../data/testFiles/pngImage.png'},
		'gifFormat': {firstName: 'Mark9', lastName: 'Smith', formatToUpload: '../data/testFiles/gifImage.gif'}
    }
}