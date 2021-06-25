/// <reference types="cypress" />

describe('Tests de la page Commandes', () => {
  it('Devrait afficher une liste de commandes vide', () => {
    cy.visit('/')
      .get('#navigateToOrders')
      .click()
      .get('h2')
      .should('have.text', 'Commandes passées')
      .get('p')
      .should('have.text', "Vous n'avez passé aucune commande.")
      .get('.pastOrder')
      .should('have.length', 0);
  });

  it('Devrait afficher une commande effectuée', () => {
    const pastOrders = [
      {
        orderDate: '2021-06-25T11:02:03.768Z',
        finalPrice: 80,
        items: [
          {
            quantity: 2,
            book: {
              isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
              title: "Henri Potier à l'école des sorciers",
              price: 35,
              cover:
                'https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp0.jpg?alt=media'
            }
          },
          {
            quantity: 1,
            book: {
              isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
              title: 'Henri Potier et la Chambre des secrets',
              price: 30,
              cover:
                'https://firebasestorage.googleapis.com/v0/b/henri-potier.appspot.com/o/hp1.jpg?alt=media'
            }
          }
        ]
      }
    ];

    cy.setLocalStorage('validatedOrders', JSON.stringify(pastOrders))
      .visit('/')
      .get('#navigateToOrders')
      .click()
      .get('h2')
      .should('have.text', 'Commandes passées')
      .get('.pastOrder')
      .should('have.length', 1);
  });
});
