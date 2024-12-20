// cypress/e2e/tests/login.spec.js

import LoginPage from '../../support/pages/loginPage'; // Ruta relativa
import DashboardPage from '../../support/pages/dashboardPage'; // Ruta relativa

describe("Login Test", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.visit();
    cy.wait(2000);
    cy.get('body').should('be.visible');
  });

  it("Login 2.0 - Login con usuario registrado", () => {
    cy.wait(1000);
    loginPage.clickLoginButton();
    cy.wait(1000);
    loginPage.getModalLabel().should("exist");

    loginPage.login("dao12", "1213");

    dashboardPage.getWelcomeMessage().should('be.visible');
  });
});
