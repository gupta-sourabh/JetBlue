var basePage = require('../utilities/basePage');
var locators = require('../utilities/elementLocators');

var GmailLoginPage = function () {
    this.url = 'http://cafetownsend-angular-rails.herokuapp.com';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
    this.username = locators.findLocator(['model','user.name']);
    this.password = locators.findLocator(['model','user.password']);
    this.loginButton = locators.findLocator(['css','#login-form > fieldset > button']);
    this.greetings = locators.findLocator(['id','greetings']);
    this.allEmployees = locators.findLocatorAll(['repeater', 'employee in employees']);
    this.errorInvalidLogin = locators.findLocator(['css', 'p.error-message.ng-binding']);
     

    this.openApplication = function() {
        browser.get(this.url);
    };

    this.loginIntoApplication = function (username, password) {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();
        expect(this.greetings.getText()).toEqual('Hello '+username);
    };

    this.verifyEmployeeList = function(recordExist) {
        expect(this.allEmployees.getText()).toContain(recordExist);
    };

    this.verifyInvalidLogin = function(username, password, errorMessage) {
        this.username.sendKeys(username);
        this.password.sendKeys(password);
        this.loginButton.click();

        expect(this.errorInvalidLogin.getText()).toBe(errorMessage);
    };
};

GmailLoginPage.prototype = basePage; //extends basePage
module.exports = new GmailLoginPage();