var bankingFormPage = require('../../pages/bankingFormPage');

describe('Angular Banking Form', function() {
    beforeEach(function() {
        bankingFormPage.openApplication();
    });
    it('verify all buttons are diaplyed on home page', function() {
        bankingFormPage.verifyButtonDisplayed();
    });
    describe('Manager Login Verification', function() {
        it('verify, options are available to manager: ', function() {
            bankingFormPage.clickBankManagerLogin();
            // bankingFormPage.verifyManagerOptions();
        });

        // it('verify, manager is able to add customer records: ', function() {
        //     bankingFormPage.managerAddCustomer('sourabh', 'gupta', '102451');
        //     bankingFormPage.verifyCustomerAdded('sourabh')
        // });
    }); 
});