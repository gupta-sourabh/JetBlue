var basePage = require('../utilities/basePage');
var secretConfig = require('../../../../../secretConfig');

var WindowHandlePage = function() {
    this.openApplication = function() {
        browser.get(secretConfig.applicationUrl);
    };
};

WindowHandlePage.prototype = basePage; //extend basePage
module.exports = new WindowHandlePage();