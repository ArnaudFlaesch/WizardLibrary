/// <reference types="cypress" />

describe('WizardLibrary tests', () => {
  before(() => {
    cy.visit('/');
  });

  it("Vérifie que l'application fonctionne", () => {
    cy.get('p').should('have.text', 'book-list works!');
  });
});
