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

  it('Devrait ajouter les 3 premiers livres dans le panier', () => {
    const CART_BOOKS_TITLES = [
      "Henri Potier à l'école des sorciers",
      'Henri Potier et la Chambre des secrets',
      "Henri Potier et le Prisonnier d'Azkaban"
    ];

    cy.wait('@getBooks').then(() => {
      cy.intercept('GET', API_BASE_URL + '/**/commercialOffers', {
        fixture: 'commercial-offers-response.json'
      }).as('getCommercialOffers');

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
        .should('have.text', 'Total : 95')
        .get('#validateCartButton')
        .scrollIntoView()
        .click()
        .wait('@getCommercialOffers')
        .then(() => {
          cy.get('h2')
            .should('have.text', 'Passer une commande')
            .get('p')
            .get('.cartItem')
            .should('have.length', 3)
            .get('.bookTitle')
            .each((element, index) => {
              expect(element.text().trim()).to.equal(CART_BOOKS_TITLES[index]);
            })
            .get('#priceBeforeReduction')
            .should('have.text', '95')
            .get('#priceAfterReduction')
            .should('have.text', '80')
            .get('#validateOrder')
            .click()
            .get('.pastOrder')
            .should('have.length', 1);
        });
    });
  });
});
