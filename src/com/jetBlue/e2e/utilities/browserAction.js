var BrowserAction = function() {

    this.refreshBrowser = function() {
        browser.refresh();
    };
};

module.exports = new BrowserAction();