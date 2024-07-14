import RegistrationFormPage from '../support/pages/RegistrationFormPage';

describe('Registration Form', () => {
  beforeEach(() => {
    RegistrationFormPage.visit();
  });

  it('Successfully submits the form with valid data', () => {
    cy.contains('Full Name').should('exist'); // Assert heading before filling full name
    RegistrationFormPage.fillFullName('Usama Ali');

    cy.contains('Email Address').should('exist'); // Assert heading before filling email
    RegistrationFormPage.fillEmail('aliusama1861@gmail.com');

    cy.contains('Password').should('exist'); // Assert heading before filling password
    RegistrationFormPage.fillPassword('Password123!');

    cy.contains('Confirm Password').should('exist'); // Assert heading before filling confirm password
    RegistrationFormPage.fillConfirmPassword('Password123!');

    cy.contains('Date of Birth').should('exist'); // Assert heading before filling date of birth
    RegistrationFormPage.fillDateOfBirth('1999-10-11');

    cy.contains('Gender').should('exist'); // Assert heading before selecting gender
    RegistrationFormPage.selectGender('Male');

    cy.contains('Would you like to subscribe to our newsletter?').should('exist'); // Assert heading before selecting newsletter subscription
    RegistrationFormPage.selectNewsletterSubscription('Yes');

    RegistrationFormPage.submitForm();

    // Assertions after submission
    cy.url().should('include', 'formResponse'); // Verify URL includes 'formResponse' indicating successful submission
    cy.get('div[role="alert"]').should('not.exist'); // Ensure no error alerts are present
    cy.get('h1').should('contain.text', 'Thank you!'); // Verify thank you message is displayed
    cy.get('input[type="text"]').should('be.empty'); // Ensure input fields are cleared after submission
  });

  it('Successfully submits the form without selecting newsletter subscription', () => {
    cy.contains('Full Name').should('exist'); // Assert heading before filling full name
    RegistrationFormPage.fillFullName('Usama Ali');

    cy.contains('Email Address').should('exist'); // Assert heading before filling email
    RegistrationFormPage.fillEmail('aliusama1861@gmail.com');

    cy.contains('Password').should('exist'); // Assert heading before filling password
    RegistrationFormPage.fillPassword('Password123!');

    cy.contains('Confirm Password').should('exist'); // Assert heading before filling confirm password
    RegistrationFormPage.fillConfirmPassword('Password123!');

    cy.contains('Date of Birth').should('exist'); // Assert heading before filling date of birth
    RegistrationFormPage.fillDateOfBirth('1999-10-11');

    cy.contains('Gender').should('exist'); // Assert heading before selecting gender
    RegistrationFormPage.selectGender('Male');

    RegistrationFormPage.submitForm();

    // Assertions after submission
    cy.url().should('include', 'formResponse'); // Verify URL includes 'formResponse' indicating successful submission
    cy.get('div[role="alert"]').should('not.exist'); // Ensure no error alerts are present
    cy.get('h1').should('contain.text', 'Thank you!'); // Verify thank you message is displayed
    cy.get('input[type="text"]').should('be.empty'); // Ensure input fields are cleared after submission
  });
});
