// cypress/pageObjects/loginPage.js

class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    clickLoginButton() {
      cy.xpath('//*[@id="login2"]').click();
    }
  
    getModalLabel() {
      return cy.xpath('//h5[@id="logInModalLabel" and @class="modal-title" and text()="Log in"]');
    }
  
    getUsernameField() {
      return cy.xpath('//input[contains(@class, "form-control") and contains(@id, "loginusername")]');
    }
  
    getPasswordField() {
      return cy.xpath('//*[@id="loginpassword"]');
    }
  
    getLoginButton() {
      return cy.xpath('//*[contains(@onclick, "logIn()")]');
    }
  
    login(username, password) {
      this.getUsernameField().type(username);
      this.getPasswordField().type(password);
      this.getLoginButton().click();
    }
  }
  
  export default LoginPage;
  