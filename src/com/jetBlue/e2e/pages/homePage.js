var basePage = require('../utilities/basePage');
var locators = require('../utilities/elementLocators');

var HomePage = function () {
    this.url = 'https://www.jetblue.com';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
    this.appLogo = locators.findLocator(['css','div > div > div > jb-logo > a > img']);

    this.openApplication = function() {
        browser.get(this.url);
    };

    this.verifyLogo = function () {
        expect(this.appLogo.isDisplayed()).toBe(true);
        console.log('Logo displayed:');
    };
};

HomePage.prototype = basePage; //extends basePage
module.exports = new HomePage();