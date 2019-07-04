var basePage = require('../utilities/basePage');
var locators = require('../utilities/elementLocators');

var BankingFormPage = function() {
    this.url = 'http://www.way2automation.com/angularjs-protractor/banking/#/login';
    this.pageLoaded = this.inDom($('h2.ng-binding'));
    //home page elements
    this.homeButton = locators.findLocator(['css', '[ng-click="home()"]']);
    this.customerButton = locators.findLocator(['css', '[ng-click="customer()"]']);
    this.managerButton = locators.findLocator(['css', '[ng-click="manager()"]']);

    //manager login page elements
    this.managerAddCustomer = locators.findLocator(['css', '[ng-click="addCust()"]']);
    this.managerAddCustomerButton = locators.findLocator(['css', 'div:nth-child(3) > button']);
    this.managerOpenAccount = locators.findLocator(['css', '[ng-click="openAccount()"]']);
    this.managerCustomers = locators.findLocator(['css', '[ng-click="showCust()"]']);
    this.customerFirstName = locators.findLocator(['model', 'fName']);
    this.customerLastName = locators.findLocator(['model', 'lName']);
    this.customerPostCode = locators.findLocator(['model', 'postCd']);
    this.addCustomerButton = locators.findLocator(['css', 'form > button']);
    this.allCustomer = locators.findLocatorAll (['repeater', 'cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer']);

    this.openApplication = function() {
        browser.get(this.url);
    };
    
    this.verifyButtonDisplayed = function() {
        expect(this.homeButton.isDisplayed()).toBe(true);
        expect(this.customerButton.isDisplayed()).toBe(true);
        expect(this.managerButton.isDisplayed()).toBe(true);
    };

    this.verifyManagerOptions = function() {
        expect(this.managerAddCustomer.isDisplayed()).toBe(true);
        expect(this.managerOpenAccount.isDisplayed()).toBe(true);
        expect(this.managerCustomers.isDisplayed()).toBe(true);
    };

    this.clickBankManagerLogin = function() {
        this.managerButton.click();
    };

    this.managerAddCustomer = function(username, lastname, postCode) {
        this.managerAddCustomerButton.click();
        this.customerFirstName.sendKeys(username);
        this.customerLastName.sendKeys(lastname);
        this.customerPostCode.sendKeys(postCode);
        this.addCustomerButton.click();
    };

    this.verifyCustomerAdded = function(username) {
        expect(this.allCustomer.getText()).toContain(username);
    };
};

BankingFormPage.prototype = basePage; //extends basePage
module.exports = new BankingFormPage();