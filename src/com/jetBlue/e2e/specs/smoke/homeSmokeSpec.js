var homePage = require('../../pages/homePage');

describe ('JetBlue home page', function() {
    beforeEach(function() {
        homePage.openUrl();
    });

    it('Verify if, user is able to acess application home page: ', function() {
        homePage.verifyLogo();
    });
});