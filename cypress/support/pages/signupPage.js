// cypress/pageObjects/signupPage.js

class SignupPage {
    visit() {
      cy.visit('/');
    }
  
    clickSignupButton() {
      cy.xpath('//*[@id="signin2"]').click();
    }
  
    getModalLabel() {
      return cy.xpath('//*[@id="signInModalLabel"]');
    }
  
    getUsernameField() {
      return cy.xpath('//*[@id="sign-username"]');
    }
  
    getPasswordField() {
      return cy.xpath('//*[@id="sign-password"]');
    }
  
    getSignupButton() {
      return cy.xpath('//*[@onclick="register()"]');
    }
  
    submitSignup(username, password) {
      this.getUsernameField().type(username);
      this.getPasswordField().type(password);
      this.getSignupButton().click();
    }
  
    verifyAlert(expectedAlertText) {
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal(expectedAlertText);
      });
    }
  }
  
  export default SignupPage;
  