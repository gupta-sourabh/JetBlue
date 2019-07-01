var basePage = require('../utilities/basePage');
var locators = require('../utilities/elementLocators');

var AngularCheckBoxPage = function() {
    this.url = 'http://www.way2automation.com/angularjs-protractor/checkboxes/';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
    this.checkSelected = locators.findLocator(['css', 'div:nth-child(4) > ul > li:nth-child(1) > ul > li:nth-child(1) > h4 > input']);
    this.checkSelectedAll = locators.findLocatorAll(['css', 'h4 > input']);

    this.openApplication = function() {
        browser.get(this.url);
    };

    this.verifyChecked = function() {
        expect(this.checkSelected.isSelected()).toBe(true);
    };

    this.verifyCheckBoxContains = function() {
        // expect(this.checkSelectedAll.getText()).toContain('Boxcutter');
        // console.log(expect(this.checkSelectedAll.get(0).getText()));
        expect(this.checkSelectedAll.get(5).isSelected()).toBe(false);
    };
};

AngularCheckBoxPage.prototype = basePage; //extends basePage
module.exports = new AngularCheckBoxPage();
