var basePage = require('../utilities/basePage');
var secretData = require('../../../../../secretConfig');

var WindowHandlePage = function() {
    this.openApplication = function() {
        browser.get(secretData.app)
    };
};

WindowHandlePage.prototype = basePage; //extend basePage
module.exports = new WindowHandlePage();