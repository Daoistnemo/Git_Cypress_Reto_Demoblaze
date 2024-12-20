// cypress/e2e/tests/logout.spec.js

import LoginPage from '../../support/pages/loginPage'; // Ruta relativa
import DashboardPage from '../../support/pages/dashboardPage'; // Ruta relativa

describe("Logout Test", () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.visit();
    cy.wait(2000);
    cy.get('body').should('be.visible');
  });

  it("Logout 3.0 - Logout correcto", () => {
    cy.wait(1000);
    loginPage.clickLoginButton();
    cy.wait(1000);
    loginPage.getModalLabel().should("exist");

    loginPage.login("dao12", "1213");
    cy.wait(2000);

    dashboardPage.getWelcomeMessage().should('be.visible');
    cy.wait(2000);

    dashboardPage.logout();
    cy.wait(2000);

    dashboardPage.getLoginButton().should('be.visible');
  });
});
