// cypress/pageObjects/dashboardPage.js

class DashboardPage {
    getWelcomeMessage() {
      return cy.xpath('//a[@id="nameofuser" and text()="Welcome dao12"]');
    }
  
    getLogoutButton() {
      return cy.xpath('//a[@id="logout2" and text()="Log out"]');
    }
  
    logout() {
      this.getLogoutButton().click();
    }
  
    getLoginButton() {
      return cy.xpath("//*[@id='login2']");
    }
  }
  
  export default DashboardPage;
  