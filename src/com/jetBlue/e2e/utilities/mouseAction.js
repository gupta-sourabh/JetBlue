var MouseAction = function() {
    
    this.mouseMoveAction = async function(element) {
        return browser.actions().mouseMove(element).perform();
    }
};

module.exports = new MouseAction();