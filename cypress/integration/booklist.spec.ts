/// <reference types="cypress" />

describe('Book list tests', () => {
  // @TODO Mettre en secret
  const API_BASE_URL = 'https://henri-potier.techx.fr/books/';
  const BOOKS_TITLES = [
    "Henri Potier à l'école des sorciers",
    'Henri Potier et la Chambre des secrets',
    "Henri Potier et le Prisonnier d'Azkaban",
    'Henri Potier et la Coupe de feu',
    "Henri Potier et l'Ordre du phénix",
    'Henri Potier et le Prince de sang-mêlé',
    'Henri Potier et les Reliques de la Mort'
  ];

  before(() => {
    cy.intercept('GET', API_BASE_URL).as('getBooks');
    cy.visit('/');
  });

  it('Devrait afficher la liste des livres', () => {
    cy.wait('@getBooks').then(() => {
      cy.get('.book')
        .should('have.length', 7)
        .get('h3')
        .each((element, index) => {
          expect(element.text().trim()).to.equal(BOOKS_TITLES[index]);
        });
    });
  });
});
