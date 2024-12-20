// cypress/e2e/tests/signup.spec.js

import SignupPage from '../../support/pages/signupPage';  // Ruta relativa
import DashboardPage from '../../support/pages/dashboardPage';  // Ruta relativa

describe("Signup Test", () => {
  const signupPage = new SignupPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    signupPage.visit();
    cy.wait(2000);
    cy.get('body').should('be.visible');
  });

  it("Signup 1.0 - Subscripcion con credenciales correctas", () => {
    cy.wait(1000);
    signupPage.clickSignupButton();
    cy.wait(1000);
    signupPage.getModalLabel().should("exist");

    signupPage.submitSignup("dao122", "1213");
    signupPage.verifyAlert("Sign up successful.");
  });
});
