/// <reference types="cypress" />

describe('Cart tests', () => {
  // @TODO Mettre en secret
  const API_BASE_URL = 'https://henri-potier.techx.fr/books/';
  before(() => {
    cy.intercept('GET', API_BASE_URL).as('getBooks');
    cy.visit('/');
  });

  it('Devrait afficher les 3 premiers livres dans le panier', () => {
    cy.get('.addBookToCartButton')
      .eq(0)
      .click()
      .get('.addBookToCartButton')
      .eq(1)
      .click()
      .get('.addBookToCartButton')
      .eq(2)
      .click()
      .get('.cartItem')
      .should('have.length', 3)
      .get('#totalPrice')
      .should('have.text', 'Total : 95');
  });
});
