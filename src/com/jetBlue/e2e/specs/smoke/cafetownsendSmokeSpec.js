var cafetownsendPage = require('../../pages/cafetownsendPage');

describe('CafeTownSend valid login', function() {
    beforeEach(function() {
        cafetownsendPage.openApplication();
    });

    it('verify if, user is able to login into application: ', function() {
        cafetownsendPage.loginIntoApplication('Luke','Skywalker');
    });
});