var angularCheckBoxPage = require('../../pages/angularCheckBoxPage');

describe('Angular CheckBox', function() {
    beforeEach(function() {
        angularCheckBoxPage.openApplication();
    });
    it('Verify is checkbox is already selected', function() {
        angularCheckBoxPage.verifyChecked();
    });
    it('Verify is checkbox is already selected', function() {
        angularCheckBoxPage.verifyCheckBoxContains();
    });
});