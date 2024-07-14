class RegistrationFormPage {
    visit() {
      cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSdqr4KTE2_W5hwcwxGU8T9BWUbLF9A_3wqoP_dVXD7cXx88mA/viewform?vc=0&c=0&w=1&flr=0');
    }
  
    fillFullName(name) {
      cy.get('input[type="text"]').eq(0).type(name);
    }
  
    fillEmail(email) {
      cy.get('input[type="text"]').eq(1).type(email);
    }
  
    fillPassword(password) {
      cy.get('input[type="text"]').eq(2).type(password);
    }
  
    fillConfirmPassword(confirmPassword) {
      cy.get('input[type="text"]').eq(3).type(confirmPassword);
    }
  
    fillDateOfBirth(dob) {
      cy.get('input[type="date"]').type('1999-10-11')
    
    }
  
    selectGender(gender) {
    cy.get('div[role="radiogroup"]').contains(gender).eq(0).click();
    
    }
  
    selectNewsletterSubscription(subscription) {
      cy.get('div[role="radiogroup"]').contains(subscription).eq(0).click();
    }
  
    submitForm() {
      cy.get('span').contains('Submit').click();
    }
  
    verifySuccess() {
      cy.url().should('include', 'formResponse');
    }
  }
  
  export default new RegistrationFormPage();
  