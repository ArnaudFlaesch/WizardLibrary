/// <reference types="cypress" />

describe('Tests de la page Commandes', () => {
  before(() => {
    cy.visit('/');
  });

  it('Devrait afficher une liste de commandes vide', () => {
    cy.get('#navigateToOrders')
      .click()
      .get('h2')
      .should('have.text', 'Commandes passées')
      .get('p')
      .should('have.text', "Vous n'avez passé aucune commande.")
      .get('.pastOrder')
      .should('have.length', 0);
  });
});
