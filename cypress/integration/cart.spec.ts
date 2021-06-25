/// <reference types="cypress" />

describe('Tests du panier', () => {
  const API_BASE_URL = 'https://henri-potier.techx.fr/books/';

  beforeEach(() => {
    cy.intercept('GET', API_BASE_URL, {
      fixture: 'book-list-response.json'
    }).as('getBooks');
    cy.visit('/');
  });

  it("Devrait naviguer vers la page du panier et vérifier qu'il est vide", () => {
    cy.get('#navigateToCheckout')
      .click()
      .get('h2')
      .should('have.text', 'Passer une commande')
      .get('p')
      .should('have.text', "Vous n'avez aucun livre dans votre panier.")
      .get('.cartItem')
      .should('have.length', 0);
  });

  it('Devrait afficher les 3 premiers livres dans le panier', () => {
    cy.wait('@getBooks').then(() => {
      cy.get('.addBookToCartButton')
        .eq(0)
        .scrollIntoView()
        .click()
        .get('.addBookToCartButton')
        .eq(1)
        .scrollIntoView()
        .click()
        .get('.addBookToCartButton')
        .eq(2)
        .scrollIntoView()
        .click()
        .get('.cartItem')
        .should('have.length', 3)
        .get('#totalPrice')
        .should('have.text', 'Total : 95');
    });
  });
});
