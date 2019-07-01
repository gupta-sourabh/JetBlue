var BasePage = function() {

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via waitForPageLoad()
     * @requires page have both `url` and `pageLoaded` properties
     */   
	this.openUrl = function() {
        browser.get(this.url, this.timeout.xl);
        return this.waitForPageLoad();
    };

    /**
     * Wrappers for expected conditions
     * @returns {ExpectedCondition}
     */	
	var EC = protractor.ExpectedConditions;
	
	this.inDom = function(locator) {
        return EC.presenceOf(locator);
    };
	
	/**
    * wait and verify that a page is loaded
    * @requires a page to include `pageLoaded` method
    */
    this.waitForPageLoad = function() {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };
	
    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
	this.timeout = {
		'xs': 420,
        's' : 1000,
        'm' : 2000,
        'l' : 5000,
        'xl': 9000,
        'xxl': 15000
    };
	
	//manual wait for page load
    this.waitForElementLoad = function(element) {
    	return browser.wait(EC.presenceOf(element), this.timeout.xl);
    };
};

module.exports = new BasePage();