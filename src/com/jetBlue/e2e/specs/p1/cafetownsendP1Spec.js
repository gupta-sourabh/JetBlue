var cafetownsendPage = require('../../pages/cafetownsendPage');
var dataProvider = require('../../data/dataProvider/dataProvider');
var using = require('jasmine-data-provider');

describe('Angular Application', function() {
    beforeEach(function() {
        cafetownsendPage.openApplication();
        console.log('application open successfully: ');
    });

    using(dataProvider.invalidLogin, function(data, desscription) {
    it('verify if, user is able to login into application with invalid username/password combination: '+desscription, function() {
        cafetownsendPage.verifyInvalidLogin(data.username, data.password, data.errorMessage);
    })    
    });
});